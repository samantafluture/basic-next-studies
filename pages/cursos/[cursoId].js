export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    cursoId: '1'
                }
            },
            {
                params: {
                    cursoId: '2'
                }
            }
        ],
        fallback: false
    };
}

export async function getStaticProps(context) {
    const id = context.params.cursoId;

    const response = await fetch('http://localhost:3000/api/cursos/' + id);
    const data = await response.json();
    return {
        props: {
            curso: data
        }
    };
}

export default function Cursos(props) {
    const curso = props.curso;

    return (
        <h1>
            Curso: {curso.nome} - {curso.id}
        </h1>
    );
}
