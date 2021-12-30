const MeusCursos = [
    {
        id: '1',
        nome: 'Curso de JavaScript'
    },
    {
        id: '2',
        nome: 'Curso de React'
    },
    {
        id: '3',
        nome: 'Curso de Angular'
    }
];

export default function Cursos(request, response) {
    const id = request.query.cursoId,
        curso = MeusCursos.find((curso) => curso.id === id);

    if (curso) {
        response.status(200).json(curso);
    } else {
        response.status(404).json({
            mensagem: 'Curso não encontrado'
        });
    }
}
