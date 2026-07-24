export const INITIAL_PRODUCTS = [
  {
    id: 'nexus-rtx-5090',
    name: 'NEXUS GeForce RTX 5090 Cybernetic Edition',
    category: 'Graphics Cards',
    price: 1899,
    badge: 'FLAGSHIP',
    variant: 'graphics',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    tagline: 'Unprecedented 4K ray tracing performance at 240Hz with AI Frame Generation 4.0.',
    description: 'Engineered for extreme enthusiasts and neural rendering workloads. Features 32GB GDDR7 memory, vapor chamber cooling, and stealth matte-black armor.',
    stock: 12,
    power: 450,
    compatibility: {
      slot: 'PCIe 5.0 x16',
      minPsu: 850,
      lengthMm: 336
    },
    specs: {
      'Architecture': 'Blackwell Next-Gen',
      'VRAM': '32GB GDDR7 384-bit',
      'CUDA Cores': '21,760',
      'Boost Clock': '2,580 MHz',
      'TDP': '450W',
      'Thermal Solution': 'Quad-Fan Vapor Core'
    },
    performance: {
      'Cyberpunk 2077 (4K RT Overdrive)': 165,
      'Black Myth: Wukong (4K Max)': 180,
      'Call of Duty: Warzone (4K Ultra)': 240,
      'Alan Wake 2 (4K Path Tracing)': 145
    },
    features: [
      '32GB ultra-high speed GDDR7 memory pipeline',
      'Precision CNC-machined aluminum shroud with zero RGB clutter',
      'Dual BIOS mode for Silent Operating vs Unlocked Performance',
      'PCIe Gen 5.0 16-pin power connector with gold-plated terminals'
    ]
  },
  {
    id: 'nexus-ryzen-9-9950x',
    name: 'AMD Ryzen 9 9950X Apex Precision',
    category: 'Processors',
    price: 699,
    badge: 'NEW GEN',
    variant: 'processor',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    tagline: '16 Cores, 32 Threads of pure Zen 5 desktop dominance.',
    description: 'Designed for heavy multi-threaded compiling, 3D rendering, and high-framerate competitive gaming with sub-millisecond response times.',
    stock: 18,
    power: 170,
    compatibility: {
      socket: 'AM5',
      memoryType: 'DDR5'
    },
    specs: {
      'Cores / Threads': '16 / 32',
      'Max Boost Clock': '5.7 GHz',
      'Base Clock': '4.3 GHz',
      'L3 Cache': '80MB',
      'Socket': 'AM5',
      'TDP': '170W'
    },
    performance: {
      'Cinebench R23 Multi-Core': 43200,
      'Blender Classroom Render': '2.1 mins',
      'Geekbench 6 Single': 3450,
      '1080p CS2 Average FPS': 720
    },
    features: [
      'Zen 5 architecture built on 4nm TSMC node',
      'Native PCIe 5.0 controller for ultra-fast NVMe storage',
      'Unlocked for Precision Boost Overdrive and Curve Optimizer',
      'Integrated RDNA 3 graphics core for multi-monitor setup'
    ]
  },
  {
    id: 'nexus-z990-stealth',
    name: 'NEXUS Core Z990 Stealth Motherboard',
    category: 'Motherboards',
    price: 399,
    badge: 'BESTSELLER',
    variant: 'motherboard',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tagline: 'Next-gen PCIe 5.0 architecture with zero-wire back-connect layout.',
    description: 'Designed with 24+1+2 digital power phases, integrated Wi-Fi 7, and full thermal armor for unyielding stability under sustained loads.',
    stock: 15,
    power: 45,
    compatibility: {
      socket: 'AM5',
      formFactor: 'ATX',
      memoryType: 'DDR5',
      maxMemorySpeed: 8400
    },
    specs: {
      'Chipset': 'Z990 / X870E Platform',
      'Socket': 'AM5',
      'Form Factor': 'ATX',
      'Memory Support': '4x DDR5 up to 8400+ MT/s (192GB)',
      'Expansion Slots': '2x PCIe 5.0 x16, 1x PCIe 4.0 x4',
      'Networking': 'Wi-Fi 7 + 10GbE LAN'
    },
    performance: {
      'VRM Peak Temp under 300W': '52°C',
      'Memory Clock OC Limit': '8600 MT/s',
      'NVMe Read Speed Limit': '14,500 MB/s'
    },
    features: [
      'Hidden cable routing headers on back panel for ultra-clean builds',
      'Heavy forged aluminum heat sinks covering 90% of PCB',
      'EZ-Latch mechanism for quick GPU and M.2 drive replacement',
      'Studio-grade ESS SABRE DAC audio engine'
    ]
  },
  {
    id: 'nexus-vanta-ddr5-64gb',
    name: 'Vanta DDR5 64GB (2x32GB) 6400MT/s CL30',
    category: 'Memory',
    price: 249,
    badge: 'PREMIUM',
    variant: 'memory',
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80',
    tagline: 'Ultra-low latency memory with hand-screened ICs.',
    description: 'Encased in heavy anodized matte black aluminum. Designed for maximum bandwidth and sub-50ns memory latency.',
    stock: 25,
    power: 15,
    compatibility: {
      memoryType: 'DDR5'
    },
    specs: {
      'Capacity': '64GB (2 x 32GB)',
      'Speed': '6400 MT/s',
      'Timings': 'CL30-38-38-76',
      'Voltage': '1.35V',
      'Profile': 'AMD EXPO & Intel XMP 3.0',
      'Heatspreader': 'Anodized Aluminum'
    },
    performance: {
      'Memory Bandwidth': '102.4 GB/s',
      'AIDA64 Latency': '54.2 ns'
    },
    features: [
      'Hand-sorted SK Hynix A-die memory chips for extreme overclocking',
      'Custom 10-layer PCB with extra copper grounding planes',
      'Low profile height for maximum CPU cooler clearance',
      'On-die ECC (Error Correction Code) for mission-critical stability'
    ]
  },
  {
    id: 'nexus-atlas-gen5-ssd-4tb',
    name: 'Atlas Gen5 NVMe SSD 4TB',
    category: 'Storage',
    price: 329,
    badge: 'EXTREME',
    variant: 'storage',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    tagline: '14,500 MB/s sequential throughput with direct-to-die graphene heatsink.',
    description: 'Eliminate loading screens instantly. Features PCIe 5.0 x4 controller with 4GB LPDDR4 cache.',
    stock: 20,
    power: 10,
    compatibility: {
      slot: 'M.2 PCIe 5.0 x4'
    },
    specs: {
      'Capacity': '4TB',
      'Form Factor': 'M.2 2280',
      'Interface': 'PCIe Gen 5.0 x4, NVMe 2.0',
      'Seq. Read': '14,500 MB/s',
      'Seq. Write': '12,800 MB/s',
      'Endurance': '3,000 TBW'
    },
    performance: {
      'Game Load Time (DirectStorage)': '<0.8s',
      '4K Random Read IOPS': '1,800,000'
    },
    features: [
      'Phison E26 PCIe 5.0 flagship controller',
      'Graphene copper micro-layer heatsink included',
      'Hardware-based AES 256-bit data encryption',
      '5-Year direct NEXUS CORE warranty'
    ]
  },
  {
    id: 'nexus-aero-360-liquid',
    name: 'Aero Liquid 360 Stealth Cooler',
    category: 'Cooling',
    price: 189,
    badge: 'SILENT',
    variant: 'cooling',
    image: 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?auto=format&fit=crop&w=800&q=80',
    tagline: 'Whisper-quiet 360mm hybrid liquid loop with micro-channel coldplate.',
    description: 'Features a subtle high-resolution stealth OLED pump cap display showing CPU temperature and system telemetry in real time.',
    stock: 14,
    power: 25,
    compatibility: {
      sockets: ['AM5', 'LGA1851', 'LGA1700'],
      radiatorSize: '360mm'
    },
    specs: {
      'Radiator Size': '360mm (397 x 120 x 27mm)',
      'Pump Speed': '800 - 3200 RPM',
      'Fan Spec': '3x 120mm Fluid Dynamic Bearing',
      'Display': '2.4" OLED Monochromatic 60Hz',
      'Noise Level': '16.5 - 28.4 dBA',
      'Tubing': 'Sleeved zero-permeability rubber'
    },
    performance: {
      'Peak CPU Temp under 300W load': '64°C',
      'Acoustic Noise at Max Load': '27.8 dBA'
    },
    features: [
      'Subtle monochrome OLED telemetry screen',
      'Daisy-chain magnetic fan interconnects eliminate cable clutter',
      'Pre-applied thermal matrix for optimal thermal conductivity',
      'Maintenance-free closed loop sealed for 6+ years'
    ]
  },
  {
    id: 'nexus-aether-4k-oled',
    name: 'Aether 32" 4K OLED 240Hz Gaming Display',
    category: 'Monitors',
    price: 1099,
    badge: 'AWARD WINNER',
    variant: 'monitor',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    tagline: 'Infinite contrast, 0.03ms GTG response time, and 99% DCI-P3 color gamut.',
    description: 'Designed for cinema-grade precision and blur-free competitive motion clarity with custom heat dissipation armor.',
    stock: 9,
    power: 80,
    compatibility: {
      inputs: ['DisplayPort 2.1', 'HDMI 2.1', 'USB-C 90W PD']
    },
    specs: {
      'Panel Size': '32 inches',
      'Panel Type': 'QD-OLED Gen 3',
      'Resolution': '3840 x 2160 (4K UHD)',
      'Refresh Rate': '240Hz',
      'Response Time': '0.03ms (GTG)',
      'HDR Rating': 'DisplayHDR True Black 400'
    },
    performance: {
      'Color Accuracy': 'Delta E < 1.0',
      'Motion Clarity Index': 'VESA ClearMR 13000'
    },
    features: [
      'QD-OLED panel with anti-reflective custom matte treatment',
      'Custom aluminum heat sink cooling—no noisy monitor fan',
      'KVM switch integrated with 90W USB-C Power Delivery',
      'Ultra-thin 4mm edge profile with ergonomic stand'
    ]
  },
  {
    id: 'nexus-vault-pro-chassis',
    name: 'Vault Pro Airflow Chassis',
    category: 'Cases',
    price: 179,
    badge: 'DESIGN ICON',
    variant: 'case',
    image: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Tool-less dual-chamber chassis with tempered glass and high-airflow mesh.',
    description: 'Crafted from 1.5mm cold-rolled steel and bead-blasted aluminum. Features dual 360mm radiator mounts and routing space for seamless cabling.',
    stock: 16,
    power: 0,
    compatibility: {
      formFactor: 'ATX',
      maxGpuLength: 420,
      maxCpuCoolerHeight: 185,
      psuFormat: 'ATX'
    },
    specs: {
      'Form Factor Support': 'E-ATX, ATX, Micro-ATX, Mini-ITX',
      'Dimensions': '485 x 235 x 505 mm',
      'Front I/O': '1x USB 3.2 Gen2x2 Type-C, 2x USB 3.0, Audio Combo',
      'Fan Capacity': 'Up to 10x 120mm fans',
      'Radiator Support': 'Top 360mm, Side 360mm, Bottom 360mm'
    },
    performance: {
      'Internal Airflow Rate': '210 CFM',
      'GPU Thermal Reduction vs Standard Case': '-8.4°C'
    },
    features: [
      'Dual-chamber architecture separates PSU and cable clutter',
      'Tool-free side panel quick-release mechanism',
      'Includes 3x 120mm low-noise stealth intake fans',
      'Removable dust filters on top, bottom, and side intake ports'
    ]
  },
  {
    id: 'nexus-rtx-5080',
    name: 'NEXUS GeForce RTX 5080 Stealth',
    category: 'Graphics Cards',
    price: 1299,
    badge: 'POPULAR',
    variant: 'graphics',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    tagline: 'High-framerate 4K and 1440p ray tracing power.',
    description: 'Features 16GB GDDR7 memory and tri-fan cooling armor. Superior power efficiency for demanding gaming rigs.',
    stock: 15,
    power: 320,
    compatibility: {
      slot: 'PCIe 5.0 x16',
      minPsu: 750,
      lengthMm: 310
    },
    specs: {
      'Architecture': 'Blackwell',
      'VRAM': '16GB GDDR7 256-bit',
      'CUDA Cores': '10,752',
      'Boost Clock': '2,610 MHz',
      'TDP': '320W'
    },
    performance: {
      'Cyberpunk 2077 (4K RT High)': 120,
      'Black Myth: Wukong (4K High)': 135,
      'Call of Duty: Warzone (4K Ultra)': 185
    },
    features: [
      '16GB GDDR7 bandwidth for high resolution texture packs',
      'Stealth dark titanium finish',
      'Zero dBA silent idle fan mode'
    ]
  },
  {
    id: 'nexus-quantum-1000w-psu',
    name: 'Quantum 1000W ATX 3.1 Platinum PSU',
    category: 'Power Supplies',
    price: 219,
    badge: 'STABLE',
    variant: 'psu',
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80',
    tagline: '1000 Watts 80 PLUS Platinum efficiency with native 12V-2x6 cable.',
    description: '100% Japanese 105°C capacitors, fully modular ultra-flexible flat cables, and zero-fan RPM under 40% load.',
    stock: 22,
    power: 1000,
    compatibility: {
      formFactor: 'ATX'
    },
    specs: {
      'Wattage': '1000W',
      'Efficiency Rating': '80 PLUS Platinum (92%+)',
      'Compliance': 'ATX 3.1 & PCIe 5.1',
      'Capacitors': '100% Japanese 105°C',
      'Fan': '135mm Fluid Dynamic Bearing'
    },
    performance: {
      'Voltage Regulation Ripple': '< 15mV',
      'Hold-Up Time': '22ms'
    },
    features: [
      'Native 12V-2x6 600W connector for flagship GPUs',
      'Fully modular custom sleeved cable set',
      '10-Year global operational warranty'
    ]
  }
];
