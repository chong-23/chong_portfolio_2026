interface CreativeWorkCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  backgroundColor?: string;
}

const CreativeWorkCard = ({ title, subtitle, imageUrl, backgroundColor }: CreativeWorkCardProps) => {
  return (
    <div className="group cursor-pointer border border-border rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 overflow-hidden">
      <div 
        className={`w-full aspect-square ${backgroundColor || 'bg-muted'} flex items-center justify-center`}
      >
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CreativeWorkCard;