import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddTodo({ giveTodosParent }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [todo, setTodo] = useState({ title: '', description: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value
        });
    };
    const handleAddTodo = () => {
        // Vérifie si le titre et la description ne sont pas vides
        if (todo.title.trim() !== '' && todo.description.trim() !== '') {
            // Appelle la fonction de levage d'état pour ajouter un nouveau todo
            giveTodosParent(prevState => [...prevState, todo]); // Ajoute le nouveau todo à la liste existante
            handleClose();
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add todo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="todoTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={todo.title}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="todoDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={todo.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddTodo}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddTodo;