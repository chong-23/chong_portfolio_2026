interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
}

const ProjectCard = ({ title, subtitle, description, imageUrl }: ProjectCardProps) => {
  return (
    <div className="w-full mb-12 md:mb-12">
      <div className="flex flex-col lg:flex-row lg:h-[400px] border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 cursor-pointer group overflow-hidden">
        <div className="flex-1">
          <div className="w-full h-[400px] lg:h-full bg-muted">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-muted group-hover:bg-muted/80 transition-colors duration-300" />
            )}
          </div>
        </div>
        <div className="flex-1 p-6 md:p-8 lg:flex lg:flex-col lg:justify-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 font-medium tracking-wide">
              {subtitle}
            </p>
            <p className="text-base leading-relaxed text-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;