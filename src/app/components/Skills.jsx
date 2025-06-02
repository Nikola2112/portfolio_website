'use client';
export default function Skills() {
    return (
        <section id="skills" className="p-8">
            <h2 className="text-3xl text-neon mb-4">Навички</h2>
            <ul className="grid grid-cols-2 gap-4">
                <li>Java 8, 11, 17</li>
                <li>Spring Boot, Hibernate</li>
                <li>PostgreSQL, MySQL, Redis</li>
                <li>Docker, Kubernetes, Jenkins</li>
            </ul>
        </section>
    );
}