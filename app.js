// --- 1. GESTIÓN DEL CARRITO DE COMPRAS ---

// Obtener el carrito actual del almacenamiento local (o iniciar uno vacío si no existe)
function obtenerCarrito() {
    const carritoGuardado = localStorage.getItem('unam_food_carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

// Agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    let carrito = obtenerCarrito();
    
    // Buscar si el producto ya está en el carrito
    let itemExistente = carrito.find(item => item.nombre === producto);
    
    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({ nombre: producto, precio: precio, cantidad: 1 });
    }
    
    // Guardar el carrito actualizado en LocalStorage
    localStorage.setItem('unam_food_carrito', JSON.stringify(carrito));
    console.log('Carrito actualizado:', carrito);
    actualizarVistaCarrito();
}

// --- 2. GESTIÓN DE LA FACULTAD / ZONA DE ENTREGA ---

// Guardar la zona de entrega preferida en CU
function guardarZonaEntrega(facultad) {
    localStorage.setItem('unam_food_zona', facultad);
    console.log(`Zona de entrega guardada: ${facultad}`);
}

function obtenerZonaEntrega() {
    return localStorage.getItem('unam_food_zona') || 'No seleccionada';
}