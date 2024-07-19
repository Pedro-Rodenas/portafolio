document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.card');
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });

    const projectLinks = document.querySelectorAll('.project-link');
    const projectDetails = document.getElementById('project-details');

    projectLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const project = event.target.dataset.project;
            displayProjectDetails(project);
        });
    });

    function displayProjectDetails(project) {
        let projectContent = '';
        
        switch(project) {
            case 'backend':
                projectContent = `
                    <img src="img/backend.jpg" alt="Backend Project">
                    <div class="buttons">
                        <p>Esta página no ah sido publicada</p>
                        <a href="https://github.com/Pedro-Rodenas/Crud.git">Código fuente</a>
                    </div>
                `;
                break;
            case 'frontend':
                projectContent = `
                    <img src="img/frontend.jpg" alt="Frontend Project">
                    <div class="buttons">
                        <a href="https://pedro-rodenas.github.io/pedro/">Ver más</a>
                        <a href="https://github.com/Pedro-Rodenas/pedro.git">Código fuente</a>
                    </div>
                `;
                break;
            case 'maquetacion':
                projectContent = `
                    <img src="img/maquetacion.jpg" alt="Maquetación Project">
                    <div class="buttons">
                        <a href="https://www.figma.com/design/4P1YqdCTCHqbhZVs9hVJPY/Untitled?node-id=29-2&t=SqiZttApMMqsm5TP-1">Ver más</a>
                    </div>
                `;
                break;
        }

        projectDetails.innerHTML = projectContent;
        projectDetails.style.display = 'block';
    }
});
