function Competences() {
  return (
    <div className="bloc">
      <h1>Mes compétences</h1>

      <div className="competence-carte">
        <h3>01 — Développement web</h3>

        <div className="competence-item">
          <strong>HTML et CSS</strong>
          <p>
            Structurer des pages web avec HTML et améliorer
            leur présentation grâce au CSS, aux couleurs,
            aux espacements et aux mises en page adaptatives.
          </p>
        </div>

        <div className="competence-item">
          <strong>JavaScript</strong>
          <p>
            Découvrir la programmation interactive, manipuler
            les éléments d'une page et gérer les événements
            pour rendre les interfaces plus dynamiques.
          </p>
        </div>

        
      </div>

      <div className="competence-carte">
        <h3>02 — Programmation et logique</h3>

        <div className="competence-item">
          <strong>Algorithmique</strong>
          <p>
            Analyser un problème, organiser les étapes de
            résolution et développer une logique structurée
            avant de passer à la programmation.
          </p>
          
        </div>

        <div className="competence-item">
         
          <p>
            Approfondir les bases de la programmation en C,
            la structuration du code et les notions de gestion
            des données étudiées en cours.
          </p>
        </div>
      </div>

     

      
    </div>
  );
}

export default Competences;