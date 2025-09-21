interface CreativeWorkCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  backgroundColor?: string;
}

const CreativeWorkCard = ({ title, subtitle, imageUrl, backgroundColor }: CreativeWorkCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div 
        className={`w-full aspect-square rounded-lg overflow-hidden mb-4 ${backgroundColor || 'bg-muted'} flex items-center justify-center`}
      >
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h4 className="font-semibold text-base mb-1">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
};

export default CreativeWorkCard;