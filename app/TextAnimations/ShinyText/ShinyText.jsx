const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {

  const animationDuration = `${speed}s`;
  
  
  return (
  
    <div
  
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
  
      style={{
  
        backgroundImage: 'linear-gradient(120deg, rgba(210, 210, 210, 0.8) 40%, rgba(0, 255, 251, 0.9) 50%, rgba(210, 210, 210, 0.8) 60%)',
  
        backgroundSize: '200% 100%',
  
        WebkitBackgroundClip: 'text',
  
        animationDuration: animationDuration,
  
      }}
  
    >
  
      {text}
  
    </div>
  
  );
  
  };
  
  
  export default ShinyText;