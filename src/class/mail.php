<pre>
<?php
    $message = '<html><head><style>td{border-style:solid;border-width:thin}</style></head><body>Voici l\'évaluation de ' . $_POST['stagiaire'] . '<br/></br><table>';
    foreach ($_POST as $key => $value) {
        $message .= "<tr><td>$key = </td><td>$value</td></tr>";
     };
    $message .= '</table></body></html>';
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $stagiaire = $_POST['stagiaire'];
    $to = "stagiairetsa@hotmail.com, helena.levesque@cvrivesud.com, isabelle.langlois@gvmi.com";
    //$to = "atelierisabelle@videotron.ca";
    $retour = mail($to, 'Evaluation de ' . $stagiaire, $message, $headers);
    if ($retour) {
        echo '<h1>Merci</h1>';
    };
?>
</pre>