import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export async function getServerSideProps(context) {
    const id = context.query.cursoId;

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
