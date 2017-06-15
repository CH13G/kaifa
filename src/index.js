import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/Index'));
app.model(require('./models/Items'));
app.model(require('./models/Register'));
app.model(require('./models/Video'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
