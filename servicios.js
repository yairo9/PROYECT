document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los elementos de imagen
    const images = document.querySelectorAll('.image');
    
    // Obtener el modal y los elementos dentro de él
    const modal = document.getElementById('service-modal');
    const closeModalButton = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const modalPrice = document.getElementById('modal-price');
    const addToCartButton = document.getElementById('add-to-cart');

    // Información de los servicios que se mostrarán en el modal
    const serviceDetails = {
        CORTE: {
            title: 'Corte',
            description: 'Corte de cabello para un look moderno.',
            price: '$15',
            image: 'https://imagizer.imageshack.com/img924/360/h45gXn.jpg'
        },
        BARBA: {
            title: 'Barba',
            description: 'Afeitado y arreglo de barba.',
            price: '$10',
            image: 'https://imagizer.imageshack.com/img923/9378/V3Igbf.jpg'
        },
        CEJAS: {
            title: 'Cejas',
            description: 'Diseño y depilación de cejas.',
            price: '$8',
            image: 'https://imagizer.imageshack.com/img924/2705/hwhZkO.jpg'
        },
        TINTE: {
            title: 'Tinte',
            description: 'Tinte de cabello para un color vibrante.',
            price: '$20',
            image: 'https://imagizer.imageshack.com/img923/1430/9i1C66.jpg'
        },
        LIMPIEZA: {
            title: 'Limpieza Facial',
            description: 'Limpieza profunda para tu piel.',
            price: '$25',
            image: 'https://imagizer.imageshack.com/img923/9950/vU4aAg.jpg'
        },
        EXFOLIACIÓN: {
            title: 'Exfoliación Facial',
            description: 'Eliminación de células muertas para una piel suave.',
            price: '$30',
            image: 'https://imagizer.imageshack.com/img923/2244/EgeVnJ.jpg'
        },
        MASCARILLA: {
            title: 'Mascarilla Facial',
            description: 'Hidrata y rejuvenece tu piel.',
            price: '$18',
            image: 'https://imagizer.imageshack.com/img923/702/jVQv95.jpg'
        },
        HIDRATACIÓN: {
            title: 'Hidratación Facial',
            description: 'Tratamiento intensivo de hidratación para tu piel.',
            price: '$22',
            image: 'https://imagizer.imageshack.com/img923/4079/GLmdNu.jpg'
        }
    };

    // Añadir el evento de clic a cada imagen
    images.forEach(image => {
        image.addEventListener('click', function() {
            const service = this.getAttribute('data-service'); // Obtener el servicio al que pertenece la imagen
            const details = serviceDetails[service]; // Obtener los detalles del servicio

            if (details) {
                // Actualizar el contenido del modal
                modalTitle.textContent = details.title;
                modalDescription.textContent = details.description;
                modalPrice.textContent = details.price;
                modalImage.src = details.image; // Establecer la imagen pequeña en el modal

                // Mostrar el modal
                modal.classList.remove('hidden');
            }
        });
    });

    // Cerrar el modal cuando se haga clic en el botón
    closeModalButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
