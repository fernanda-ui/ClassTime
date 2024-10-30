
document.addEventListener('DOMContentLoaded', function () {
  // Obtener referencias a los elementos del DOM
  const perfilBtn = document.querySelector('.nav-item.perfil a');
  const perfilContent = document.getElementById('perfil-content');

  // Función para mostrar u ocultar el contenido del perfil
  function togglePerfilContent() {
      // Mostrar u ocultar el contenido del perfil
      if (perfilContent.style.display === 'block') {
          perfilContent.style.display = 'none';
      } else {
          perfilContent.style.display = 'block';
      }
  }

  // Agregar un evento de clic al botón de perfil
  perfilBtn.addEventListener('click', function (event) {
      // Evitar que el enlace por defecto se ejecute en dispositivos móviles
      event.preventDefault();

      // Mostrar u ocultar el contenido del perfil
      togglePerfilContent();
  });

  // Agregar un evento táctil al botón de perfil para dispositivos móviles
  perfilBtn.addEventListener('touchstart', function (event) {
      // Evitar que el evento táctil predeterminado se ejecute
      event.preventDefault();

      // Mostrar u ocultar el contenido del perfil
      togglePerfilContent();
  });

  // Detectar toques fuera del área del perfil para cerrar el contenido en dispositivos móviles
  document.addEventListener('touchstart', function (event) {
      if (!perfilContent.contains(event.target) && perfilContent.style.display === 'block') {
          perfilContent.style.display = 'none';
      }
  });
});


//tarjetas del horario

function girarTarjeta(tarjeta) {
    // Obtiene la parte frontal y trasera de la tarjeta
    const front = tarjeta.querySelector('.front');
    const back = tarjeta.querySelector('.back');

    // Si la tarjeta está en la parte frontal, la gira hacia atrás
    if (front.style.transform === '' || front.style.transform === 'rotateY(0deg)') {
        front.style.transform = 'rotateY(-180deg)';
        back.style.transform = 'rotateY(0deg)';
    } else { // Si la tarjeta está en la parte trasera, la gira hacia adelante
        front.style.transform = 'rotateY(0deg)';
        back.style.transform = 'rotateY(180deg)';
    }
}

//calendario

document.addEventListener('DOMContentLoaded', function() {
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const monthYearDisplay = document.getElementById('monthYearDisplay');
    const calendarGrid = document.getElementById('calendarGrid');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function showCalendar(month, year) {
        // Limpiar el calendario anterior
        calendarGrid.innerHTML = '';

        // Establecer el mes y el año en el encabezado
        monthYearDisplay.textContent = `${getMonthName(month)} ${year}`;

        // Obtener el primer día del mes
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startingDay = firstDayOfMonth.getDay(); // 0 (Sunday) to 6 (Saturday)

        // Llenar los días anteriores del mes
        for (let i = 0; i < startingDay; i++) {
            const dayElement = createCalendarDayElement('');
            calendarGrid.appendChild(dayElement);
        }

        // Llenar los días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = createCalendarDayElement(day);
            calendarGrid.appendChild(dayElement);
        }
    }

    function createCalendarDayElement(day) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        if (day === '') {
            dayElement.textContent = '';
        } else {
            dayElement.textContent = day;
            if (currentYear === currentDate.getFullYear() && currentMonth === currentDate.getMonth() && day === currentDate.getDate()) {
                dayElement.classList.add('today');
            }
        }
        return dayElement;
    }

    function getMonthName(month) {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return months[month];
    }

    showCalendar(currentMonth, currentYear);

    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        showCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        showCalendar(currentMonth, currentYear);
    });
});


//funcion del contenido de chat privado

// Asigna un evento de clic a cada chat para cambiar de grupo
document.querySelectorAll('.chat').forEach(chat => {
    chat.addEventListener('click', () => {
      const groupName = chat.querySelector('h3').textContent;
      const groupAvatarSrc = chat.querySelector('.avatar').src;
  
      // Actualiza el encabezado del mensaje con el nombre y la imagen del grupo seleccionado
      const messageHeader = document.querySelector('.message-header');
      messageHeader.innerHTML = `
        <img src="${groupAvatarSrc}" alt="${groupName}" class="avatar">
        <h3>${groupName}</h3>
      `;
  
      // Aquí podrías cargar los mensajes del grupo seleccionado
      // Por ejemplo, hacer una llamada AJAX para cargar los mensajes del grupo
  
      // Puedes mostrar un mensaje temporal como "Cargando mensajes..."
      const messageContent = document.querySelector('.message-content');
      messageContent.innerHTML = '<p>Cargando mensajes...</p>';
    });
  });
  
  
  
// funcion del contenido de pagina principal

// Obtener todos los contenedores
const containers = document.querySelectorAll('.container');
const modal = document.getElementById('modal');
const span = document.getElementsByClassName('close')[0];

// Agregar evento de clic a cada contenedor
containers.forEach(container => {
    container.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

// Cerrar la ventana emergente cuando se hace clic en la 'x'
span.onclick = function() {
    modal.style.display = 'none';
}

// Cerrar la ventana emergente cuando se hace clic fuera del contenido de la ventana
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}














