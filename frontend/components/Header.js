
export default function Header({address}){
    return (
        <div className="border-bottom align-items-right">
        {!address ?
            <p>
                Welcome guest
            </p>
            :
            <p>
                {`Welcome ${address}`}
            </p>
        }
        </div>
        
    )
}