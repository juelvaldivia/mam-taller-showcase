
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const MobiliarioSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample furniture projects data
  const furnitureProjects = [
    {
      id: 1,
      name: "Mesa de Comedor Roble",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
      ]
    },
    {
      id: 2,
      name: "Estantería Modular",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
        "https://images.unsplash.com/photo-1551298370-9c50423afe50?w=600",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
      ]
    },
    {
      id: 3,
      name: "Escritorio Ejecutivo",
      images: [
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600",
        "https://images.unsplash.com/photo-1551298370-9c50423afe50?w=600",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600"
      ]
    },
    {
      id: 4,
      name: "Banco Rustico",
      images: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600",
        "https://images.unsplash.com/photo-1551298370-9c50423afe50?w=600"
      ]
    },
    {
      id: 5,
      name: "Cama King Size",
      images: [
        "https://images.unsplash.com/photo-1551298370-9c50423afe50?w=600",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
      ]
    },
    {
      id: 6,
      name: "Librero Vintage",
      images: [
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
        "https://images.unsplash.com/photo-1551298370-9c50423afe50?w=600"
      ]
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      const project = furnitureProjects.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => 
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const project = furnitureProjects.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => 
          prev === 0 ? project.images.length - 1 : prev - 1
        );
      }
    }
  };

  const selectedProjectData = selectedProject 
    ? furnitureProjects.find(p => p.id === selectedProject)
    : null;

  return (
    <section id="mobiliario" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-iron-900 mb-6">
            Mobiliario
          </h2>
          <p className="text-xl text-iron-600 max-w-3xl mx-auto">
            Cada pieza de mobiliario es diseñada y fabricada con atención al detalle, 
            combinando la calidez de la madera con líneas modernas y funcionales.
          </p>
        </div>

        {/* Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {furnitureProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                relative overflow-hidden rounded-lg cursor-pointer group
                ${index === 0 ? 'col-span-2 row-span-2' : ''}
                ${index === 3 ? 'md:col-span-2' : ''}
                ${index === 4 ? 'lg:row-span-2' : ''}
              `}
              onClick={() => openModal(project.id)}
            >
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  minHeight: index === 0 ? '400px' : '200px',
                  maxHeight: index === 0 ? '500px' : '300px'
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <p className="text-sm opacity-90">Ver detalles</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && selectedProjectData && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={selectedProjectData.images[currentImageIndex]}
                    alt={selectedProjectData.name}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  
                  {selectedProjectData.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-iron-900 mb-2">
                    {selectedProjectData.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-iron-600">
                      {currentImageIndex + 1} de {selectedProjectData.images.length}
                    </p>
                    {selectedProjectData.images.length > 1 && (
                      <div className="flex space-x-2">
                        {selectedProjectData.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-iron-900' : 'bg-iron-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobiliarioSection;
