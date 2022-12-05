// == Import : npm
import PropTypes from 'prop-types';

// == Composant
/**
 *  on retour un composant de bar de progession
 * @param {String} clasnameWrapper - nom de classe pour la div externe
 * @param {String} classnameInternal - nom de classe pour la div interne
 * @param {String} bgcolor - couleur de fond de la partie complétée de la barre en #hexadécimal
 * @param {number} completed - nombre entre 0 et 100
 * @return {Composant} - le composant crée
 */
const ProgressBar = ({
  classnameWrapper,
  classnameInternal,
  bgcolor,
  completed,
}) => {
  const labelStyles = {

    width: `${completed}%`,
    backgroundColor: bgcolor,
  };

  return (
    <div className={classnameWrapper}>
      <div className={classnameInternal} style={labelStyles}>
        <span>{completed}%</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  classnameWrapper: PropTypes.string.isRequired,
  classnameInternal: PropTypes.string.isRequired,
  bgcolor: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
};

// == Export
export default ProgressBar;
