import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | 'pending' | ''>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('送信中...');
    setStatusType('pending');

    // Dummy submission logic
    setTimeout(() => {
      // Simulate success
      setFormStatus('お問い合わせありがとうございます。内容を確認後、担当者よりご連絡いたします。');
      setStatusType('success');
      setName('');
      setEmail('');
      setMessage('');
      // Clear message after a while
      setTimeout(() => {
        setFormStatus('');
        setStatusType('');
      }, 7000);
    }, 1500);
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="name" className="block text-left mb-1.5 text-sm font-medium text-gray-300">お名前 <span className="text-red-400">*</span></label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-green-500 focus:ring-green-500 outline-none text-white placeholder-gray-500" placeholder="例：山田 太郎" />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block text-left mb-1.5 text-sm font-medium text-gray-300">メールアドレス <span className="text-red-400">*</span></label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-green-500 focus:ring-green-500 outline-none text-white placeholder-gray-500" placeholder="例：info@example.com" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-left mb-1.5 text-sm font-medium text-gray-300">ご相談内容 (任意)</label>
        <textarea id="message" name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-green-500 focus:ring-green-500 outline-none text-white placeholder-gray-500" placeholder="ホームページで実現したいこと、ご質問、ご希望の相談日時など"></textarea>
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold text-lg py-3.5 rounded-lg cta-button-v2">
        <i className="fas fa-paper-plane mr-2"></i>無料で相談してみる
      </button>
      {formStatus && (
        <div id="form-message" className={`mt-4 text-center text-sm ${
          statusType === 'success' ? 'text-green-400' : 
          statusType === 'error' ? 'text-red-400' : 
          statusType === 'pending' ? 'text-yellow-400' : ''
        }`}>
          {formStatus}
        </div>
      )}
    </form>
  );
};

export default ContactForm;