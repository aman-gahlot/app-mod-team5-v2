import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span><img className="avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAgVBMVEX///8YR3H5+fnf5OkURXD19/gAPWsAM2UAOmnW3OEeRHD7/PwAP2xjdJE6VXoMQm7q7O80V3rBydOMmq2hrbtBYYJbcY0AN2hheJLO1dy4ws0AL2SuuMNtgZkAJmBKYIGWo7QAH1whTXUqVHuDkaRSaYhziaAAEVUAKV8ADFYAGltXVv+hAAAEDklEQVR4nO3YbbeiKhQAYAnwJS3wBVHTiSPqnLn//wde1DTrdNZEk7VmDXzJsvIRNpstFt68t2FrY723+UZgBEZgBEZgBEZgBEZgBEZgBEZgBEZgBEbwDwh8jLH/PkEkupQxlnYieocgqn4c7IAghEhgOx9Z8WBXPCoomG2DZQtc+ZjhMQHMOAHXDTmp9ypBQewv1x/6AZSvEYjPm9cHtQRO/AqBcG4DgJQ14NoEfUHJvwEMAuCItQWee/vyiPSxqeYm18wN2gLydRKMLYslcEPpIgevKhDfdIGKwxDYyWYT226zpoDenobDMCCSqpSEGXLgioL4KgwRQec3JOu/0hK7W09A9+hSUHf1+RMUqCAsbYBqupoguk4F6EKEQJX1neLopEY9QXczDGw5HwZBTwqy1QTjICCwuHMVCY1fXcpQrbFKagno8P8hA1LNPDKMgB2mhTqBLgcFacwGLUHeD3JQFRzIrMtaRrh6HS6WDAFCajaMArA18qKWoOjTEU8sBSE2q5qy7MSpv8M+VbZxkcmewIu1BH024LmV8CEADiKbgz7vO4FVCRsErsZk0O4DJKm1GSKSyA6ei6KuP1fLYdWwdaajliBSVyGtOug7gaDSovl8jsp5gvCYrSXIVZwNKZeGCEl1/wvBuW5Q2aBcKw762Th2sIp9kl8IcBOcACoZ+BppWTsjHYbZ54O6Zpa1OZcC+JStXKmzKGgLOhvV6qK0oQmp3WR5Ch9Vqgx4WGkMwAOCyCEZTmDiQD8AiC+LISUI7KzAOP/2188Q4L0rop9eAmBfLI11AKYwz6HlMx73Iqr7CKlZoYiPKPr0EhUMVBUGfLxf3994pajYEAFY97lJt0r7oNFHXvZ3KzgI0uUaiAXTDMJHBFZjFel4Hfol/5eH9IFHwD/YPxA/HeewDMbSdduXCnwvKuNl3CUucKtXCq7+KGkBdwNH72HhmQIL5lESZ2Gju43x9++lGcE/I8DjxgwU8yd5Fcp03rsr41jEcT4dqzbWaFTcdXN3COiv4SWqp580dpznom5P+bCIOzIJdpmYBZDftZVxj+DHKAhP75vtsDBsqukDC7KpP3aLhQJuVxLkzrQCyqlI8sLpWrtFkfxUgaoA/EnQzfsTRXu6dW9/FuC+PVvwmaZt24ZsfMvmjoYAXwsqeTwe9/GzBTzvW/JVsKXXgl1CIYT02YLP4WUahWpe/W6NwisiMbKnPz7OkbhfPRKXAqsab92P0fTT7/rgroX6HsF/o0BOP2m3JaTlEc116UJQJaqNhRN01KH4bfF6T1YeKy/vvGte7OptunhiovEkSDrVqvEUrdTx7hmCmyq9veMVBE9sRmAERmAERmAERmAERmAERmAERmAERmAERvB3CLD/3rb5H8LQSEm/EEPJAAAAAElFTkSuQmCC" alt="" /></span>
        <span className="logo">Hotel Seacoast</span>
        <div className="navItems">
          {/* <button className="navButton">Register</button> */}
          {/* <button className="navButton">Login</button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar