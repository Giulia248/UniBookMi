// Recupera i dati salvati dal form del profilo dall'archiviazione locale
const savedProfileData = JSON.parse(localStorage.getItem('profileData'));

// Verifica se ci sono dati salvati
if (savedProfileData) {
    // Aggiorna i valori nel riquadro delle informazioni fisse
    document.getElementById('tipodiCorso').innerText = savedProfileData.tipodiCorso || '-';
    document.getElementById('corso').innerText = savedProfileData.corso || '-';
    document.getElementById('anno').innerText = savedProfileData.anno || '-';
    document.getElementById('tipodiiscrizione').innerText = savedProfileData.anno || '-';
    document.getElementById('matricola').innerText = savedProfileData.anno || '-';
    document.getElementById('Ultimoaanodiiscrizione').innerText = savedProfileData.anno || '-';
    document.getElementById('residenza').innerText = savedProfileData.anno || '-';
    document.getElementById('telefono').innerText = savedProfileData.anno || '-';
    document.getElementById('recapito').innerText = savedProfileData.anno || '-';
    document.getElementById('cellulare').innerText = savedProfileData.anno || '-';
    document.getElementById('email').innerText = savedProfileData.anno || '-';
}

// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
  },
  yaxis: {
    title: {
      text: 'Count',
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();
