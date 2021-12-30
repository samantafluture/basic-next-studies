import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Cursos() {
    const router = useRouter(),
        id = router.query.cursoId,
        [curso, setCurso] = useState({});

    useEffect(() => {
        if (id) {
            fetch('http://localhost:3000/api/cursos/' + id)
                .then((response) => response.json())
                .then((data) => setCurso(data));
        }
    }, [id]);

    if (curso.id) {
        return <h1>Curso: {curso.nome} - {curso.id}</h1>;
    }

    return <h1>Curso {id} não encontrado!</h1>;
}
