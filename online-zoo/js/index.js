import HookFeedback from './pages/index/feedback.js';
import HookDonate from './pages/index/donate.js';

function applyEvents() {
  HookFeedback();
  HookDonate();
}

window.addEventListener('load', applyEvents);