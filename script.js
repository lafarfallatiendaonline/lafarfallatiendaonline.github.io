function cargarProductos(categoria = 'todos') {
    const container = document.getElementById('productosContainer');
    const categoriaActual = document.getElementById('categoriaActual');
    
    // Mostrar indicador de carga
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: var(--morado-principal);"></i>
            <p style="margin-top: 20px;">Cargando productos...</p>
        </div>
    `;
    
    // Filtrar productos según categoría
    const productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoria);
    
    // Nombres descriptivos para cada categoría
    const nombresCategorias = {
        'todos': 'Todos los productos',
        'hogar': 'Productos para el Hogar',
        'transporte': 'Transporte y Movilidad',
        'tecnologia': 'Tecnología y Audio',
        'belleza': 'Belleza y Cuidado Personal',
        'ferreteria': 'Ferretería y Herramientas',
        'deportes': 'Deportes y Recreación'
    };
    
    categoriaActual.innerHTML = `Mostrando: <span>${nombresCategorias[categoria]}</span>`;
    
    // Limpiar container
    container.innerHTML = '';
    
    // Si no hay productos en la categoría
    if (productosFiltrados.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--morado-suave);">
                <i class="fas fa-box-open" style="font-size: 3rem; margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 10px;">Próximamente más productos</h3>
                <p>Estamos actualizando nuestro catálogo con nuevos productos.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada producto
    productosFiltrados.forEach(producto => {
        let imagenHTML = '';
        if (producto.tieneFoto && producto.foto) {
            imagenHTML = `<img src="${producto.foto}" alt="${producto.nombre}" class="imagen-protegida" data-src="${producto.foto}" data-nombre="${producto.nombre}">`;
        } else {
            // Iconos por categoría (sin emojis)
            const iconosPorCategoria = {
                'hogar': 'fa-home',
                'transporte': 'fa-bicycle',
                'tecnologia': 'fa-headphones',
                'belleza': 'fa-spray-can',
                'ferreteria': 'fa-tools',
                'deportes': 'fa-futbol'
            };
            const icono = iconosPorCategoria[producto.categoria] || 'fa-box-open';
            imagenHTML = `<i class="fas ${icono}"></i>`;
        }
        
        // Capitalizar nombre de categoría para mostrar
        const nombreCategoria = {
            'hogar': 'Hogar',
            'transporte': 'Transporte',
            'tecnologia': 'Tecnología',
            'belleza': 'Belleza',
            'ferreteria': 'Ferretería',
            'deportes': 'Deportes'
        }[producto.categoria] || producto.categoria;
        
        const productoHTML = `
    <div class="producto-card fade-in" data-categoria="${producto.categoria}">
        <div class="producto-imagen">
            ${imagenHTML}
        </div>
        <div class="producto-info">
            <span class="producto-categoria">${nombreCategoria}</span>
            <h3 class="producto-nombre">${producto.nombre}</h3>
            <p class="producto-descripcion">${producto.descripcion}</p>  <!-- 👈 AHORA SÍ MUESTRA TODO -->
            <p class="producto-precio">${producto.precio}</p>
            <button class="btn-interes" 
                    data-producto="${producto.nombre}" 
                    data-precio="${producto.precio}">
                <i class="fas fa-shopping-bag"></i> Me interesa
            </button>
        </div>
    </div>
`;
        container.innerHTML += productoHTML;
    });
    
    // Agregar event listeners a los botones "Me interesa"
    document.querySelectorAll('.btn-interes').forEach(btn => {
        btn.addEventListener('click', function() {
            const producto = this.getAttribute('data-producto');
            const precio = this.getAttribute('data-precio');
            
            document.getElementById('producto').value = `${producto} - ${precio}`;
            document.getElementById('pedido').scrollIntoView({ behavior: 'smooth' });
            document.getElementById('producto').focus();
        });
    });
    
    // Agregar event listeners a las imágenes para el modal
    document.querySelectorAll('.imagen-protegida').forEach(img => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            abrirModalImagen(this.src, this.alt);
        });
    });
}

document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const categoria = this.getAttribute('data-categoria');
        cargarProductos(categoria);
        document.getElementById('navMenu').classList.remove('active');
    });
});

document.getElementById('domicilio').addEventListener('change', function() {
    const direccionGrupo = document.getElementById('direccionGrupo');
    const direccionInput = document.getElementById('direccion');
    
    if (this.checked) {
        direccionGrupo.style.display = 'block';
        direccionInput.required = true;
    } else {
        direccionGrupo.style.display = 'none';
        direccionInput.required = false;
        direccionInput.value = '';
    }
});

document.getElementById('formPedidoYeli').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
    const domicilio = document.getElementById('domicilio').checked;
    const direccion = document.getElementById('direccion').value;
    const mensaje = document.getElementById('mensaje').value;
    
    let textoWhatsApp = `*NUEVO PEDIDO - Yeli Di Tutto*%0A%0A`;
    textoWhatsApp += `*Nombre:* ${nombre}%0A`;
    textoWhatsApp += `*Teléfono:* ${telefono}%0A`;
    textoWhatsApp += `*Producto:* ${producto}%0A`;
    textoWhatsApp += `*Cantidad:* ${cantidad}%0A`;
    textoWhatsApp += `*Entrega:* ${domicilio ? 'A DOMICILIO' : 'RECOGER'}%0A`;
    
    if (domicilio && direccion) {
        textoWhatsApp += `*Dirección:* ${direccion}%0A`;
    }
    
    if (mensaje) {
        textoWhatsApp += `*Mensaje:* ${mensaje}%0A`;
    }
    
    textoWhatsApp += `%0A---%0A*Pedido desde la página web*`;
    
    const urlWhatsApp = `https://wa.me/${NUMERO_YELI}?text=${textoWhatsApp}`;
    window.open(urlWhatsApp, '_blank');
    
    setTimeout(() => {
        alert('✅ Se abrió WhatsApp con tu pedido pre-llenado.\n\nYeli te responderá pronto. ¡Gracias!');
    }, 500);
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.querySelectorAll('span').forEach((span, index) => {
            span.style.transform = 'none';
            if (index === 1) span.style.opacity = '1';
        });
    });
});

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG' || 
        e.target.classList.contains('producto-imagen') ||
        (e.target.parentElement && e.target.parentElement.classList.contains('producto-imagen'))) {
        e.preventDefault();
        mostrarMensajeProteccion();
        return false;
    }
});

document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG' || 
        e.target.classList.contains('imagen-protegida')) {
        e.preventDefault();
        return false;
    }
});

function mostrarMensajeProteccion() {
    const mensaje = document.createElement('div');
    mensaje.innerHTML = `
        <div class="mensaje-proteccion">
            <i class="fas fa-lock"></i>
            <h3>Contenido protegido</h3>
            <p>¡Gracias por visitar Yeli Di Tutto!</p>
        </div>
    `;
    
    document.body.appendChild(mensaje);
    
    setTimeout(() => {
        mensaje.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(mensaje);
        }, 500);
    }, 2000);
}

function configurarWhatsApp() {
    const btnWhatsApp = document.getElementById('btnWhatsApp');
    if (btnWhatsApp) {
        btnWhatsApp.href = `https://wa.me/${NUMERO_YELI}`;
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        mostrarMensajeProteccion();
        return false;
    }
    
    if (e.key === 'Escape') {
        cerrarModalImagen();
    }
});

let imagenesModal = [];
let indiceActual = 0;
let touchStartX = 0;
let touchEndX = 0;

function abrirModalImagen(src, alt) {
    const modal = document.getElementById('modalImagen');
    const modalImg = document.getElementById('modalImagenSrc');
    
    modalImg.src = src;
    modalImg.alt = alt;
    
    imagenesModal = Array.from(document.querySelectorAll('.imagen-protegida'));
    indiceActual = imagenesModal.findIndex(img => img.src === src);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    history.pushState({ modalOpen: true }, '');
}

function cerrarModalImagen() {
    const modal = document.getElementById('modalImagen');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    if (history.state && history.state.modalOpen) {
        history.back();
    }
}

function imagenSiguiente() {
    if (imagenesModal.length > 0) {
        indiceActual = (indiceActual + 1) % imagenesModal.length;
        const siguienteImg = imagenesModal[indiceActual];
        const modalImg = document.getElementById('modalImagenSrc');
        
        modalImg.src = siguienteImg.src;
        modalImg.alt = siguienteImg.alt;
    }
}

function imagenAnterior() {
    if (imagenesModal.length > 0) {
        indiceActual = (indiceActual - 1 + imagenesModal.length) % imagenesModal.length;
        const anteriorImg = imagenesModal[indiceActual];
        const modalImg = document.getElementById('modalImagenSrc');
        
        modalImg.src = anteriorImg.src;
        modalImg.alt = anteriorImg.alt;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const modalHTML = `
        <div class="modal-imagen" id="modalImagen">
            <div class="modal-contenido">
                <img id="modalImagenSrc" src="" alt="">
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const modal = document.getElementById('modalImagen');
    
    modal.addEventListener('click', cerrarModalImagen);
    
    document.getElementById('modalImagenSrc').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    modal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    modal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            imagenSiguiente();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            imagenAnterior();
        }
    }
    
    window.addEventListener('popstate', function(e) {
        if (modal.classList.contains('active')) {
            cerrarModalImagen();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                imagenAnterior();
            } else if (e.key === 'ArrowRight') {
                imagenSiguiente();
            }
        }
    });
    
    cargarProductos();
    configurarWhatsApp();
    
    if (typeof console !== 'undefined') {
        console.log('%c🔒 La Farfalla - Página Protegida', 'color: #7B4B94; font-size: 14px; font-weight: bold;');
        console.log('%c📞 Contacto protegido | 🖼️ Imágenes protegidas', 'color: #9B6FB3; font-size: 12px;');
        console.log('%c✨ Página creada con cuidado para Yeli', 'color: #C0C0C0; font-size: 11px;');
    }
    
    console.log('✅ La Farfalla - Modal simplificado listo');
});