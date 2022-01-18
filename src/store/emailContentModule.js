const emailContentModule = {
state(){
    return{
        title: ` <body>
            <div class="container">
            <h1>Évaluation stagiaire 2022 - CVRS</h1>
            <p>Stagiaire évaluer:</p>
            <p>Évaluateur:</p>
            <p>Date de l'évaluation:</p>
            <br />`,
        table: `<div>
            <h3>Attitude / Comportement</h3>
            <table class="table">
                <thead>
                <tr>
                    <td>Question</td>
                    <td>Évaluation</td>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>question</td>
                    <td>réponse</td>
                </tr>
                <tr>
                    <td>question</td>
                    <td>réponse</td>
                </tr>
                </tbody>
            </table>
            </div>`,
        output:'',
    }
},
mutations:{
    createContentEmail(state){
        state.output = state.title + state.table;
    }
},
actions:{},
getters:{},
};

export default emailContentModule;