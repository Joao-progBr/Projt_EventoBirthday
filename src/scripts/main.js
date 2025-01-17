document.addEventListener('DOMContentLoaded', function(){
    AOS.init();

    const dataEvento = new Date('feb, 01 2025 18:00:00')
    const timeStampEvento = dataEvento.getTime()

    const contagem = document.getElementById('contador')


    const contador = setInterval(function(){
        const hoje = new Date()
        const timeStamphoje = hoje.getTime()

        const tempoAteEvento = timeStampEvento - timeStamphoje

        const diasEmMs = 1000 * 60 * 60 * 24
        const horasEmMs = 1000 * 60 * 60
        const minutosEmMs = 1000 * 60

        if(tempoAteEvento <=0){
            clearInterval(contador)
            contagem.innerHTML = 'Evento expirado'
            contagem.classList.add('hero__title__evento')
        }
        else{ 
            const diasAteEvento = Math.floor(tempoAteEvento / diasEmMs);
            const horasAteEvento = Math.floor((tempoAteEvento % diasEmMs) / horasEmMs)
            const minutosAteEvento = Math.floor((tempoAteEvento % horasEmMs) / minutosEmMs)
            const segundosAteEvento = Math.floor((tempoAteEvento % minutosEmMs) / 1000)

            contagem.innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`
            contagem.classList.remove('hero__title__evento')
        }
    }, 1000)
})