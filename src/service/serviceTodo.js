export function getTodo() {
    return new Promise((resolve, reject) => {
        let response = [
            {
                status: 200,
                success: true,
                data: [
                    {
                        title: 'Faire les courses',
                        description: 'Acheter du lait, du pain et des œufs',
                    },
                    {
                        title: 'Rendez-vous chez le médecin',
                        description: 'À 14h pour le rendez-vous médical',
                    },
                    {
                        title: 'Appeler Jean',
                        description: 'Lui demander des nouvelles et fixer un rendez-vous',
                    }]

            },
            {
                status: 500,
                message: 'Error Server',
                data: null
            }
        ]


        setTimeout(() => {
            resolve(response[0]);
            // reject(response[1])
        }, 2000);
    });
}
