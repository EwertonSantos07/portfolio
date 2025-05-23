//Função para ajustar altura do iframe
export async function alteraAlturaIframe() {
    return new Promise((resolve) => {
        let iframe = document.querySelector(".main-iframe");
        let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        try {
            if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {
                iframe.style.height = iframe.contentWindow.document.body.clientHeight + "px";
                console.log(iframe);
                resolve(iframeDocument);
            }
        } catch (error) {
            console.log("Erro ao acessar conteúdo do iframe!", error);
        }
        
    })
}

//Função para atualizar documentação do iframe
export async function atualizaIframe(path, pagina) {
    return new Promise((resolve) => {
        let iframe = document.querySelector(".main-iframe");
        iframe.src = path; 

        // Adiciona uma nova entrada ao histórico do documento pai
        //history.pushState({ iframePage: pagina }, pagina, `#${pagina}`);

        if (iframe) {
            iframe.onload = function(){
                console.log(iframe.src, "Novo DOM");
                let statusResult = "iFrame foi atualizado";
                resolve(statusResult);
            }
        }
    })
}