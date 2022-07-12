import { useEffect } from "react";

export default function SpecialComponent() {

    useEffect(() => {
        document.title='Componente Visível!';
    
        return () =>{
          document.title = 'React Hooks | useEffect';  
        };
    
    },[]);

    return(
        <div>
            <h2>Cheque o Titulo da Pagina</h2>
        </div>
    );
}
