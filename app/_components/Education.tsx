export type EducationProps = {
    image: string;
    title: string;
    role: string;
    date: string;
  };

export const EducationS: EducationProps[] = [
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_400_400/B4EZSoWSIuG0Ag-/0/1737991201920?e=1749081600&v=beta&t=Ge9e2NVzfCZWy_XYUR5LyZ1MAXPfaXylfIHS1mtHxtY",
      title: "Université de Bordeaux",
      role: "Master Software Engineering",
      date: "2024-Now",
    },
    {
      image:
        "https://cdn.worldvectorlogo.com/logos/university-of-cambridge-2.svg",
      title: "University of Cambridge",
      role: "Linguaskill Certification",
      date: "01/2024",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_400_400/B4EZSoWSIuG0Ag-/0/1737991201920?e=1749081600&v=beta&t=Ge9e2NVzfCZWy_XYUR5LyZ1MAXPfaXylfIHS1mtHxtY",
      title: "Université de Bordeaux",
      role: "Computer Science Degree",
      date: "2021-2024",
    },
  ];

export const Education = (props: EducationProps) => {
    return (
      <div className="inline-flex items-center gap-4 hover:bg-accent/30 p-4 rounded transition-colors p-1" >
        <img
          src={props.image}
          alt={props.title}
          className="w-10 h-10 object-contain rounded-md "
        />
        <div className="mr-auto">
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-xs text-muted-foreground">{props.role}</p>
        </div>
          <p className="text-xs text-end text-muted-foreground">{props.date}</p>  
      </div>
    );
  };