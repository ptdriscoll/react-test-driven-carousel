import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

//If you’re running Wallaby or jest --watchAll, you’ll need to
//restart it in order for Jest to recognize the new setup.

configure({ adapter: new Adapter() });
