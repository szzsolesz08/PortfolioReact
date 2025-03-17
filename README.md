# Portfolio Website

A modern, responsive portfolio website built with React, showcasing my projects and skills. This portfolio includes an interactive programming languages carousel, detailed project cards, and a contact section.

## Features

- **Interactive Languages Carousel**: Displays programming languages with logos in a smooth, scrollable carousel
- **Project Showcase**: Detailed cards showing various projects with descriptions, technologies used, and GitHub links
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean and professional design with smooth transitions
- **Contact Section**: Easy way for visitors to get in touch

## Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- Vite (Build tool)

## Project Structure

```
├── public/                 # Static assets served as-is
│   ├── favicon.ico         # Website favicon
│   ├── site.webmanifest    # Web app manifest
│   └── *.png               # Various icon sizes for different platforms
├── src/
│   ├── assets/             # Processed assets
│   │   ├── data/           # Data files (Languages.js, Projects.js)
│   │   └── images/         # Images used in components
│   ├── view/               # React components
│   │   ├── App.jsx         # Main application component
│   │   ├── Languages.jsx   # Languages carousel component
│   │   ├── Projects.jsx    # Projects showcase component
│   │   ├── ProjectCard.jsx # Individual project card component
│   │   └── Contact.jsx     # Contact form component
│   └── main.jsx            # Application entry point
└── index.html              # Entry point HTML file
```

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/szzsolesz08/PortfolioReact.git
```

2. Install dependencies
```bash
cd PortfolioReact
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Author

Zsolt Szabó

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.