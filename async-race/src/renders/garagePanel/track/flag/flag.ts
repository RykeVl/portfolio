import _ from '../../../../shared/helpers';
import './flag.scss';

const flagImg = require('../../../../assets/flag.png');

const drawFlag = () => {
  const flag = <HTMLImageElement>_.createDOM('img', ['flag']);
  flag.src = flagImg;
  flag.alt = 'flag icon';

  return flag;
};

export default { drawFlag };
