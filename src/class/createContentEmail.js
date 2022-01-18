export class ContentEmail {
  static head = `<!DOCTYPE html>
                      <html lang="fr">
                      <head>
                        <meta charset="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>test email</title>
                        <style type="text/css">
                          body {
                            margin: 0;
                            padding: 0;
                            font-family: sans-serif;
                          }
                          .container {
                            max-width: 600px;
                            /* background: pink; */
                            margin: auto;
                            padding: 5px;
                          }
                          .table {
                            border-collapse: collapse;
                            width: 90%;
                            margin: auto;
                           
                          }
                          thead {
                            height: 40px;
                            line-height: 40px;
                            color: white;
                            padding: 0 10px;
                            background: #c7232f;
                            font-size: 1.2rem;
                          }
                          td {
                            border: 1px solid black;
                          }
                           .left-cell {
                            padding-left: 5px;
                          }
                          .right-cell {
                            text-align: center;
                          }
                          tr:nth-child(even) {
                            background: hsl(354, 59%, 93%);
                          }
                          tr:last-of-type {
                            border-bottom: 2px solid #c7232f;
                          }
                           .comment {
                            margin-bottom: 50px;
                            padding: 0 20px;
                          }
                        </style>
                      </head>`;

  static title(nomStagiaire, nomEvaluateur, dateEvaluation) {
    return ` <body>
    <div class="container">
      <h1>Évaluation stagiaire 2022 - CVRS</h1>
      <p>Stagiaire évaluer: ${nomStagiaire}</p>
      <p>Évaluateur: ${nomEvaluateur}</p>
      <p>Date de l'évaluation: ${dateEvaluation}</p>
      <br />`;
  }

  static table(titre, array) {
    let kleenex = `<div>
    <h3>${titre}</h3>
    <table class="table">
      <thead>
        <tr>
          <td class="left-cell">Question</td>
          <td class="right-cell">Évaluation</td>
        </tr>
      </thead>

      <tbody>`;
    array.slice(0, -1).forEach((rep) => {
      kleenex += ` <tr>
          <td class="left-cell">${rep.questionTitle}</td>
          <td class="right-cell">${rep.questionResponse}</td>
        </tr>`;
    });

    kleenex += ` </tbody>
      </table>
      `;
    kleenex += `<p class="comment">
          Commentaires: ${array[array.length - 1].questionResponse}
        </p></div>`;

    return kleenex;
  }

  static footer = `</div>
        </body>
      </html>`;

  static createContentEmail(responses) {
    let emailBody =
      ContentEmail.head +
      ContentEmail.title(
        responses.nomStagiaire,
        responses.nomEvaluateur,
        responses.dateEvaluation
      );
    emailBody += ContentEmail.table(
      "Attitude / Comportement",
      responses.attitude
    );
    emailBody += ContentEmail.table("Technique", responses.technique);
    emailBody += ContentEmail.table(
      "Anesthésie / Chirurgie / Dentisterie",
      responses.chirurgie
    );
    emailBody += ContentEmail.table("Pharmacie", responses.pharmacie);
    emailBody += ContentEmail.footer;

    const emailSubject = `Évaluation de ${responses.nomStagiaire}`;

    return { body: emailBody, subject: emailSubject };
  }
}
