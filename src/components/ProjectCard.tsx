interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
}

const ProjectCard = ({ title, subtitle, description, imageUrl }: ProjectCardProps) => {
  return (
    <div className="w-full mb-12 md:mb-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="flex-1 lg:max-w-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 font-medium tracking-wide">
            {subtitle}
          </p>
          <p className="text-base leading-relaxed text-foreground">
            {description}
          </p>
        </div>
        <div className="flex-1 lg:flex-2">
          <div className="w-full h-64 md:h-80 lg:h-96 bg-muted rounded-lg overflow-hidden">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;