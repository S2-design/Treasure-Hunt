/* script.js - shared helpers & timer display */
(function(){
  // Timer UI: show elapsed since startTime (mm:ss) on pages with #timer
  function startTimerUI(){
    const el = document.getElementById('timer');
    if(!el) return;
    const start = parseInt(localStorage.getItem('startTime') || '0', 10);
    if(!start){ el.textContent = '--:--'; return; }
    function tick(){
      const diff = Math.max(0, Date.now() - start);
      const mm = String(Math.floor(diff/60000)).padStart(2,'0');
      const ss = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
      el.textContent = mm + ':' + ss;
    }
    tick();
    setInterval(tick,1000);
  }
  startTimerUI();

  // small helper used optionally by pages
  window.Treasure = {
    getTeamSeq(){ try{ return JSON.parse(localStorage.getItem('teamSeq')||'[]'); }catch(e){return [];} },
    getProgress(){ return parseInt(localStorage.getItem('progressIndex')||'0',10); },
    setProgress(i){ localStorage.setItem('progressIndex', String(i)); },
    getTeamName(){ return localStorage.getItem('teamName')||''; }
  };
})();
