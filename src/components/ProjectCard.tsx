import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  link?: string;
  gradientStyle?: React.CSSProperties;
  reverse?: boolean;
}

const ProjectCard = ({ title, subtitle, description, imageUrl, link, gradientStyle, reverse = false }: ProjectCardProps) => {
  const CardContent = () => (
    <div className={`flex flex-col ${reverse ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 group cursor-pointer`}>
      <div className="flex-1 relative overflow-visible">
        {/* Gradient circle positioned based on layout direction */}
        <div 
          className={`absolute w-[80%] aspect-square rounded-full transition-transform duration-300 group-hover:scale-95
            ${reverse ? '-top-8 -left-8 md:-top-12 md:-left-12' : '-top-8 -right-8 md:-top-12 md:-right-12'}`}
          style={gradientStyle}
        />
        <div className="relative w-full aspect-square">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
            />
          ) : (
            <div className="w-full h-full bg-muted/50 rounded-full group-hover:bg-muted/80 transition-colors duration-300" />
          )}
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 font-medium tracking-wide">
            {subtitle}
          </p>
          <p className="text-base leading-relaxed text-foreground mb-6">
            {description}
          </p>
          {link && (
            <span className="inline-flex items-center text-sm font-medium group-hover:text-primary transition-colors">
              See process <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full mb-12 md:mb-8">
      {link ? (
        <Link to={link}>
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </div>
  );
};

export default ProjectCard;