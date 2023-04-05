import classes from '../../styles/Card.module.scss';

const Card = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default Card;