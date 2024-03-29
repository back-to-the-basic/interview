import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const useA2HS = () => {
  const [defferedPrompt, setDefferedPrompt] = useState<any>(null);

  useEffect(() => {
    console.log('hi');
    const handler = (e) => {
      console.log(e, '????');
      console.log(e.platforms, '???');

      e.preventDefault();
      setDefferedPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const installApp = () => {
    defferedPrompt?.prompt();
    defferedPrompt?.userChoice.then((choiceResult) => {
      clearPrompt();
    });
  };

  const clearPrompt = () => {
    setDefferedPrompt(null);
  };

  return { defferedPrompt, installApp, clearPrompt };
};
