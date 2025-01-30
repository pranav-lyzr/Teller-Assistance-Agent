import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import {Sidebar} from './Sidebar';
import { ChevronDown, Info } from 'lucide-react';
import logo from './assets/main logo.png';

interface Message {
  id: number;
  text: string;
  isAI: boolean;
  timestamp: string;
}

const LoadingSidebar = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm p-8 border-l border-gray-200/80 min-h-screen shadow-lg animate-in fade-in duration-500 w-250">
      <div className="mb-10 space-y-3">
        <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse" />
      </div>
      <div className="space-y-8">
        {/* Simulate content sections */}
        <div className="space-y-4">
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="space-y-4">
          <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="space-y-3">
          {/* Simulate list items */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gray-300 rounded-full mt-2" />
              <div className="flex-1">
                <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const ChatLayout = () => {

  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [selected, setSelected] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sidebarData, setSidebarData] = useState<any>(null);

  const [messages_4, setMessages_4] = useState<Message[]>([
    {
      id: 1,
      text: "Hi, I was reading about your high-yield checking account online. Can you tell me more about it?",
      isAI: false,
      timestamp: '',
    },
    {
      id: 2,
      text: "Absolutely! It’s a premium checking account offering 2.00% APY on balances up to $10,000. Let me pull up the details.",
      isAI: true,
      timestamp: '',
    },
    {
      id: 3,
      text: "That sounds good. Is there a minimum balance requirement?",
      isAI: false,
      timestamp: '',
    },
    {
      id: 4,
      text: "Yes, you’ll need to keep at least $1,000 in the account to avoid a $15 monthly maintenance fee. However, we do offer a fee waiver if you have a direct deposit of at least $500 per month.",
      isAI: true,
      timestamp: '',
    },
    {
      id: 5,
      text: "I have my paycheck deposited into my current checking account. Could I just switch that over?",
      isAI: false,
      timestamp: '',
    },
    {
      id: 6,
      text: "Absolutely. We can help you set that up. Once your direct deposit kicks in, you won’t have to worry about the monthly fee.",
      isAI: true,
      timestamp: '',
    },
    {
      id: 7,
      text: "What if my balance exceeds $10,000? Do I still get that 2.00% on the full amount?",
      isAI: false,
      timestamp: '',
    },
    {
      id: 8,
      text: "Great question. The 2.00% applies only to the first $10,000. Anything above that earns 0.50%. I’ll confirm the exact tier structure.",
      isAI: true,
      timestamp: '',
    },
    {
      id: 9,
      text: "How soon can I open it? Is there a waiting period?",
      isAI: false,
      timestamp: '',
    },
    {
      id: 10,
      text: "We can open it immediately. I’ll need two forms of ID, and we’ll fill out a quick application. We also recommend ordering checks if you need them, but it’s optional.",
      isAI: true,
      timestamp: '',
    },
    {
      id: 11,
      text: "I might need checks. Do they come with a cost?",
      isAI: false,
      timestamp: '',
    },
    {
      id: 12,
      text: "For the high-yield checking, the first box of standard checks is complimentary. After that, it’s $10 per box. Let me note that down if you decide to proceed.",
      isAI: true,
      timestamp: '',
    },
    {
      id: 13,
      text: "Sounds good. Let’s go ahead and open the account. Is there anything else I need to know?",
      isAI: false,
      timestamp: '',
    },
    {
      id: 14,
      text: "Just be mindful of the monthly direct deposit requirement to avoid the fee. I’ll print out the disclosures for you to review and sign.",
      isAI: true,
      timestamp: '',
    },
    {
      id: 15,
      text: "Alright, let’s do it!",
      isAI: false,
      timestamp: '',
    },
    {
      id: 16,
      text: "Fantastic. We’ll get you started right now. The process takes about 10 minutes, and then you’ll walk out with a new debit card if you’d like.",
      isAI: true,
      timestamp: '',
    },
    {
      id: 17,
      text: "Yes, I’d like a new debit card too.",
      isAI: false,
      timestamp: '',
    },
    {
      id: 18,
      text: "Perfect. I’ll finalize that. One last thing—would you be interested in a linked high-yield savings account for extra funds? It has a slightly higher rate for savings.",
      isAI: true,
      timestamp: '',
    },
    {
      id: 19,
      text: "I’ll hold off on that for now. Let’s stick to the checking.",
      isAI: false,
      timestamp: '',
    },
    {
      id: 20,
      text: "No problem. Let me finalize these forms. We’ll get you set up and provide you with your new account details shortly.",
      isAI: true,
      timestamp: '',
    }
  ]);

  const [messages_1, setMessages_1] = useState<Message[]>([

    {
      "id": 1,
      "text": "Hello, I’d like to send a wire transfer to Germany. Can you help me with that?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 2,
      "text": "Certainly. Do you already have the beneficiary’s IBAN and the bank’s SWIFT code?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 3,
      "text": "Yes, I have it right here.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 4,
      "text": "Great, I’ll need to input that information into our system. Let me confirm the wire fee and today’s exchange rate for euros.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 5,
      "text": "Sure. How much is the fee for an international wire?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 6,
      "text": "It’s $45 for international wires, and we also have a cutoff time of 3:00 PM. If we process it before then, it usually arrives within two business days.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 7,
      "text": "Okay, that’s fine. I need to send 2,000 euros. Can you tell me how much that will cost in US dollars including fees?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 8,
      "text": "Let me pull up the current exchange rate. It’s 1 USD = 0.90 EUR today, plus our small currency conversion fee of 1%. I’ll calculate the total cost.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 9,
      "text": "I appreciate it. I want to make sure everything goes through in time for a payment I owe in Germany.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 10,
      "text": "Absolutely. As long as we do this before 3:00 PM, it should go out today. Could I see your photo ID for security purposes?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 11,
      "text": "Here’s my driver’s license.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 12,
      "text": "Thank you. I’ve verified your account and ID. Now, after the wire is processed, you’ll get a confirmation number. Keep it in case you need to track the transfer.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 13,
      "text": "That’s good. Will I receive any notification when it’s delivered?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 14,
      "text": "Yes, we can email you a confirmation once the funds leave our bank. The recipient’s bank may also send them a notification, but that depends on their process.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 15,
      "text": "Alright, please email me the confirmation. My email is [email protected].",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 16,
      "text": "Noted. Also, just a quick compliance check: Is this wire going to a personal or business account, and what’s the purpose of the transfer?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 17,
      "text": "It’s going to a personal account. I’m paying for some furniture I bought in Germany.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 18,
      "text": "Thank you. That’s all we need. Let me finalize the transaction…",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 19,
      "text": "Perfect.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 20,
      "text": "All set! Your wire is on its way. Here’s your receipt with the reference number. Anything else I can help with today?",
      "isAI": true,
      "timestamp": ""
    }
  ]);


  const [messages_2, setMessages_2] = useState<Message[]>([
    {
      "id": 1,
      "text": "Hi, I want to deposit this $20,000 check into my checking account.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 2,
      "text": "Sure! Let me scan the check. Is it from another financial institution?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 3,
      "text": "Yes, it’s from a smaller bank in another state.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 4,
      "text": "Understood. Because this exceeds $5,000, we might have to place a hold. Let me check our hold policy.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 5,
      "text": "I really need some of that money soon. How long is the hold going to be?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 6,
      "text": "Typically, the first $5,000 will be available by the next business day, and the remaining amount may be held for up to 7 business days. But let me see if your account history allows a shorter hold.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 7,
      "text": "I’ve been a customer here for 10 years and I have direct deposit. Does that help?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 8,
      "text": "Yes, it might. Because of your long relationship, we can consider a reduced hold. I’ll request an exception, but it depends on approval from the back office.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 9,
      "text": "Okay, I understand. Any chance I could get at least half the funds right away?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 10,
      "text": "I’ll see if we can release more than $5,000. Let me pull up your account notes and see if you have any prior large deposits and how they cleared.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 11,
      "text": "Thanks, I appreciate it.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 12,
      "text": "No problem. The system shows you have a strong history with no returned checks. I can submit an override for a partial hold or expedited availability.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 13,
      "text": "That would be amazing. I just need to cover some expenses quickly.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 14,
      "text": "Understood. I’m putting in the request. You’ll see the first $10,000 available by tomorrow, and the rest should clear within 2-3 more business days if approved.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 15,
      "text": "Thank you. That really helps.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 16,
      "text": "You’re welcome. I’ll give you a deposit receipt now, which will note the official hold policy just in case.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 17,
      "text": "Sounds good. Do I need to sign anything else?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 18,
      "text": "No, just your deposit slip. And here’s your receipt. Be sure to keep an eye on your online banking for the updated balance tomorrow.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 19,
      "text": "Will do. Thanks again!",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 20,
      "text": "My pleasure. Let me know if there’s anything else I can do for you today.",
      "isAI": true,
      "timestamp": ""
    }
  ]);

  const [messages_3, setMessages_3] = useState<Message[]>([
    {
      "id": 1,
      "text": "Hello, I’m interested in a personal loan. I saw some rates advertised on your website.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 2,
      "text": "Great! What type of loan amount are you looking for?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 3,
      "text": "I’m thinking around $10,000 to consolidate my credit card debts.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 4,
      "text": "Understood. Our personal loan rates start at around 6.99% APR, but that varies depending on your credit score and repayment term.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 5,
      "text": "My credit score is about 720. Is that good enough for the best rate?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 6,
      "text": "That’s generally considered a good credit score. You might qualify for our top-tier rate. I can check the exact range if you’d like.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 7,
      "text": "Yes, please. Also, how long can I stretch out the repayment?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 8,
      "text": "We offer terms from 12 to 60 months. A longer term means lower monthly payments but more interest overall. Let me pull up a quick estimate for a 36-month vs. 48-month term.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 9,
      "text": "Sure, I’d like to compare monthly payments.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 10,
      "text": "For $10,000 at 6.99% over 36 months, you’re looking at roughly $308 per month. For 48 months, it drops to about $240, but total interest paid is higher.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 11,
      "text": "Okay, I might lean toward the 36 months. What documents do I need?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 12,
      "text": "We’ll need proof of income—like recent pay stubs or W-2s—and a valid government ID. If you have everything, we can start the application today.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 13,
      "text": "I have last month’s pay stubs with me. Is that enough?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 14,
      "text": "Yes, that’s typically sufficient. We might request additional proof if needed, but let’s start with the stubs.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 15,
      "text": "Great. Let’s begin then. How long does the approval process take?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 16,
      "text": "Usually we can give a preliminary decision within a couple of hours, and if approved, you can get the funds in 1-2 business days.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 17,
      "text": "That’s quick. Let’s do it.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 18,
      "text": "Perfect. I’ll open the loan application form. We’ll run a quick credit check and verify your employment.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 19,
      "text": "Alright, let me know if you need anything else.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 20,
      "text": "Sure thing. Once I submit this, you’ll be notified via email or phone about the next steps.",
      "isAI": true,
      "timestamp": ""
    }
  ]);

  const [messages_5, setMessages_5] = useState<Message[]>([
    {
      "id": 1,
      "text": "Hi, I noticed a $35 overdraft fee on my account. I’d like to see if I can get that waived.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 2,
      "text": "I’m sorry you had to deal with that. Let me pull up your account and see what happened.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 3,
      "text": "I had a check clear sooner than expected. My direct deposit hit the same day, but apparently it was too late.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 4,
      "text": "Yes, I see that. The overdraft occurred yesterday morning. Let me check your account’s fee waiver history.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 5,
      "text": "I think I got one waived last year. Not sure if I can get another.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 6,
      "text": "Our policy typically allows one courtesy waiver in a 12-month period, but sometimes we can make exceptions based on your overall relationship with the bank.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 7,
      "text": "I do have my mortgage and auto loan here. Does that help?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 8,
      "text": "That can certainly be taken into consideration. Let me see if that qualifies you for a relationship-based exception.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 9,
      "text": "I’d really appreciate it if you can waive it this time.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 10,
      "text": "Absolutely, I understand. I’m submitting a fee waiver request. If it’s approved, you’ll see a $35 credit in your account within 24 hours.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 11,
      "text": "Thank you. What if it’s not approved?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 12,
      "text": "We’ll notify you, and you can choose to escalate it or speak to our customer care team. But given your long relationship, I’m optimistic.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 13,
      "text": "Good to know. How often do these get approved?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 14,
      "text": "It depends on the account history and overall standing. In many cases, if you don’t overdraft frequently, we try to help out.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 15,
      "text": "Makes sense. This was definitely a rare incident for me.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 16,
      "text": "That works in your favor. Let me just finalize the request… done! You should see a confirmation in your online banking soon.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 17,
      "text": "Thank you for your help.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 18,
      "text": "Happy to assist. Anything else I can do for you today?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 19,
      "text": "No, that’s it.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 20,
      "text": "Alright. Keep an eye on your balance, and feel free to set up low-balance alerts to avoid future overdrafts. Have a great day!",
      "isAI": true,
      "timestamp": ""
    }
  ]);

  const [messages_6, setMessages_6] = useState<Message[]>([
    {
      "id": 1,
      "text": "Hi, I’m here to open a business checking account for my new LLC.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 2,
      "text": "Congratulations on your new business! Do you have your formation documents and EIN?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 3,
      "text": "I have my Articles of Organization and my EIN letter from the IRS. Will that suffice?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 4,
      "text": "We also need an Operating Agreement or at least a statement of authorized signers. Let me check if we can proceed without it.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 5,
      "text": "I can get that emailed to me from my lawyer. Could you wait while I pull it up on my phone?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 6,
      "text": "Sure, take your time. Once I see it, I’ll just note down the authorized managers or members.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 7,
      "text": "Here it is. I’ll forward it to you or show it to you on my phone.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 8,
      "text": "Great. Let me confirm the signers. Who else will need access to the account besides you?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 9,
      "text": "Just me for now. My business partner might join later.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 10,
      "text": "Understood. We can add additional signers later, but we’ll need new forms at that time. Are you aware of our fee structure for business accounts?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 11,
      "text": "Not really. Could you break that down for me?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 12,
      "text": "Sure. There’s no monthly fee if you keep a $2,500 average balance. Otherwise, it’s $15 a month. Also, up to 100 transactions a month are free, then $0.25 each after that.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 13,
      "text": "That sounds reasonable. I don’t expect a ton of transactions at first.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 14,
      "text": "Perfect. Let me just gather your personal ID and we can begin the application. It usually takes about 15 minutes.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 15,
      "text": "Here’s my driver’s license.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 16,
      "text": "Thanks. I’ll input your information. Would you like to order business checks or deposit slips?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 17,
      "text": "Yes, I might need checks. Let’s get a small batch for now.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 18,
      "text": "Sure thing. Standard design is $25 for 50 checks, or we have custom logos for an additional cost.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 19,
      "text": "I’ll stick with the standard for now.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 20,
      "text": "Got it. Everything looks good. I’ll print out the account agreement. We just need your signature, and we’ll be set.",
      "isAI": true,
      "timestamp": ""
    }
  ]);

  const [messages_7, setMessages_7] = useState<Message[]>([
    {
      "id": 1,
      "text": "Hi, I’d like to open a 12-month CD. What’s your current rate?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 2,
      "text": "It’s currently at 3.50% APY. Let me confirm if there’s a promotional rate available.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 3,
      "text": "Okay, I also saw an ad about a special 15-month CD. Do you offer that here?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 4,
      "text": "Yes, that’s a promotional 15-month CD at 3.75% APY, but it requires a $5,000 minimum deposit.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 5,
      "text": "I have about $8,000 to invest. Which is better for me?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 6,
      "text": "If you can commit to 15 months, the higher rate might be worth it. But let me show you an approximate calculation of your interest.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 7,
      "text": "Sure, I’d love to see the numbers.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 8,
      "text": "For $8,000 at 3.75% APY for 15 months, you’d earn roughly $375 in interest, whereas the 12-month at 3.50% would earn a bit less for the same principal.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 9,
      "text": "That extra 0.25% might be worth it, though I have to keep the money locked in longer, right?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 10,
      "text": "Exactly. There is an early withdrawal penalty. For a 12-month term, it’s 90 days of interest. For 15 months, it’s 120 days of interest.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 11,
      "text": "I see. What if I need to withdraw part of it before maturity?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 12,
      "text": "Any withdrawal triggers the penalty, even partial. But you could consider a smaller amount in a shorter-term CD if you think you might need funds sooner.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 13,
      "text": "Hmm, I think I’ll be okay locking it in for 15 months. Let’s go with the promotional rate.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 14,
      "text": "Great choice. Do you want interest paid monthly to your checking account or reinvested until maturity?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 15,
      "text": "Reinvest it, please.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 16,
      "text": "You got it. Let me set that up. We’ll automatically renew the CD at maturity, but the rate may change. You can opt out anytime.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 17,
      "text": "Alright, thanks for the heads-up.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 18,
      "text": "No problem. I’ll just need your ID to process this. Then I’ll print out the disclosures.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 19,
      "text": "Here it is.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 20,
      "text": "Perfect. We’re all set. You’ll see the CD appear in your online banking by tomorrow. Anything else I can help with?",
      "isAI": true,
      "timestamp": ""
    }
  ]);

  const [messages_8, setMessages_8] = useState<Message[]>([
    {
      "id": 1,
      "text": "I found a $200 charge on my statement that I don’t recognize. Can you help me dispute it?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 2,
      "text": "I’m sorry to hear that. Let me pull up your account and see which transaction you’re referring to.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 3,
      "text": "It’s listed as 'Online Payment XYZ' from last Tuesday.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 4,
      "text": "I see it. This looks like a debit card transaction. Did you use your card online around that time?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 5,
      "text": "No, I didn’t. That’s why I think it’s fraudulent.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 6,
      "text": "Understood. We can file a dispute claim. Our fraud department typically issues a provisional credit within 10 business days if it qualifies as unauthorized.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 7,
      "text": "How do I get started with the dispute?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 8,
      "text": "I’ll need you to fill out a dispute form describing the charge and stating that it wasn’t you. Do you have any documents that might support your claim?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 9,
      "text": "Not really, just my statement showing I didn’t make that purchase.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 10,
      "text": "That’s fine. We mostly need your signature and the date. I’ll attach it to our system and forward it to the fraud team.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 11,
      "text": "Okay, how long until I get the money back?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 12,
      "text": "In most cases, we provide provisional credit within 10 business days. The full investigation can take longer, but you’ll be notified of the outcome.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 13,
      "text": "What if they decide it’s not fraudulent?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 14,
      "text": "If they find it was authorized, the provisional credit will be reversed. But if it’s genuinely not your transaction, you should be fine.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 15,
      "text": "Alright, I’m sure it wasn’t me.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 16,
      "text": "Then let’s get this form completed. Can I see your ID so I can attach it to the claim?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 17,
      "text": "Sure, here you go.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 18,
      "text": "Thanks. Once I submit this, you’ll get a confirmation email. Make sure to keep an eye on any emails or phone calls from our fraud department.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 19,
      "text": "Will do.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 20,
      "text": "Great. Here’s a copy of your dispute form. I’ll also block your current debit card and issue you a new one for added security.",
      "isAI": true,
      "timestamp": ""
    }
  ]);

  const [messages_9, setMessages_9] = useState<Message[]>([
    {
      "id": 1,
      "text": "Hi, I’d like to withdraw $12,000 in cash from my checking account.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 2,
      "text": "Certainly. Let me pull up your account. Just to let you know, for cash withdrawals over $10,000, we have to complete a federal form.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 3,
      "text": "Oh, I see. Is that going to take long?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 4,
      "text": "It shouldn’t take more than a few minutes. It’s called a Currency Transaction Report. Could I see your photo ID, please?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 5,
      "text": "Here you go. Is there a fee for this?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 6,
      "text": "No fee for filing the report. It’s just a legal requirement under the Bank Secrecy Act.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 7,
      "text": "Alright, I wasn’t aware of that.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 8,
      "text": "No problem. I just need to confirm a few details: your occupation, address, and whether this transaction is for personal or business use.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 9,
      "text": "It’s for personal use. I’m making a down payment on a car. I’m a graphic designer, by the way.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 10,
      "text": "Thank you. Let me note that down. Once I complete the CTR form, we’ll process your withdrawal.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 11,
      "text": "How soon can I get the cash?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 12,
      "text": "Right away. After this, I’ll just count out the $12,000. Would you prefer specific denominations?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 13,
      "text": "Yes, please give me $4,000 in hundreds and the rest in fifties and twenties.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 14,
      "text": "Absolutely. Let me finalize the CTR details. It’s all done electronically, so you’re good to go.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 15,
      "text": "Great. I just need to sign anything?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 16,
      "text": "Usually not for the CTR. If we need a signature for the withdrawal slip, I’ll let you know. One moment.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 17,
      "text": "Sure, take your time.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 18,
      "text": "All set. Here’s your withdrawal slip. Just sign here to confirm you’re taking $12,000 in cash.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 19,
      "text": "Alright, here you go.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 20,
      "text": "Thank you. Here’s your cash. Please count it before you leave. Have a good day and let me know if you need anything else.",
      "isAI": true,
      "timestamp": ""
    }
  ]);

  const [messages_0, setMessages_0] = useState<Message[]>([
    {
      "id": 1,
      "text": "Hi, I need a Medallion Signature Guarantee for these stock transfer forms. Can you handle that here?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 2,
      "text": "We do offer it at this branch, but only certain staff members are authorized. Let me see if Ms. Anderson is available.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 3,
      "text": "Sure, I can wait. I just want to get these documents transferred to my broker.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 4,
      "text": "She should be back in about 5 minutes. May I see your ID and the stock certificates or statements showing you own them?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 5,
      "text": "I have my driver’s license and my latest statement from the brokerage.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 6,
      "text": "Perfect. For a Medallion Guarantee, we need to verify that you’re the rightful owner of the securities. Let me confirm the requirements in our system.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 7,
      "text": "Okay, let me know if you need anything else.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 8,
      "text": "Usually we also check if you have an account with us. Are you a current customer?",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 9,
      "text": "Yes, I have a checking and savings here.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 10,
      "text": "Great. That helps expedite the process. Once Ms. Anderson is free, she’ll verify everything and stamp the documents.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 11,
      "text": "What if I need multiple signatures guaranteed?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 12,
      "text": "We can typically do that in one session, but you might need to sign in front of Ms. Anderson. She’ll guide you.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 13,
      "text": "Okay, good. Is there a fee?",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 14,
      "text": "There’s no fee for account holders. For non-account holders, it’s $25 per signature, but you’re all set since you bank with us.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 15,
      "text": "That’s nice. I wasn’t sure about the cost.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 16,
      "text": "Here comes Ms. Anderson now. Let me let her know you’re ready.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 17,
      "text": "Thank you so much.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 18,
      "text": "You’re welcome. She’ll just confirm your identity again, watch you sign, and then apply the stamp. It’s usually pretty quick.",
      "isAI": true,
      "timestamp": ""
    },
    {
      "id": 19,
      "text": "Sounds straightforward. I appreciate the help.",
      "isAI": false,
      "timestamp": ""
    },
    {
      "id": 20,
      "text": "Absolutely. Once that’s done, you’ll have the official Medallion Guarantee, and you can send the documents to your broker. Have a great day!",
      "isAI": true,
      "timestamp": ""
    }
  ]);

  const conversationList = [
    { id: 1, heading: "Wire Transfers (Domestic or International)" },
    { id: 2, heading: "Unauthorized Charge Dispute" },
    { id: 3, heading: "Loan and Credit Card Inquiries" },
    { id: 4, heading: "New Product Inquiries or Cross-Selling" },
    { id: 5, heading: "Fee Waivers and Exception Requests" },
    { id: 6, heading: "Complex Account Services (e.g., Business Accounts)" },
    { id: 7, heading: "Specialized Savings or CD Products" },
    { id: 8, heading: "Fraud Alerts or Disputes" },
    { id: 9, heading: "Large Cash Transactions / Compliance (CTR)" },
    { id: 0, heading: "Special Exceptions (Medallion Signature Guarantee, Notary)" },
  ];

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      isAI: false,
      timestamp: '',
    };
    setMessages([...messages, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "Here's a helpful response with some relevant information and references.",
        isAI: true,
        timestamp: '',
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleConversationChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedConversationId = parseInt(e.target.value);
    setSelectedConversation(selectedConversationId);
    setSelected(true);
    let selectedMessages: Message[] = [];
    setLoading(true); 
    // Update the messages based on selected conversation
    switch (selectedConversationId) {
      case 1:
        selectedMessages = messages_1;
        break;
      case 2:
        selectedMessages = messages_2;
        break;
      case 3:
        selectedMessages = messages_3;
        break;
      case 4:
        selectedMessages = messages_4;
        break;
      case 5:
        selectedMessages = messages_5;
        break;
      case 6:
        selectedMessages = messages_6;
        break;
      case 7:
        selectedMessages = messages_7;
        break;
      case 8:
        selectedMessages = messages_8;
        break;
      case 9:
        selectedMessages = messages_9;
        break;
      case 0:
        selectedMessages = messages_0;
        break;
      default:
        setMessages([]);
        break;
    }
    setMessages(selectedMessages);

    const apiUrl = "https://agent-prod.studio.lyzr.ai/v3/inference/chat/";
    const lyzrApiKey = "sk-default-pIroXlBh1nMTJb3DfpbaLYGus5l9JoCi";
    const sessionId = "unique-session-id";

    try {
      const nonAIMessages = selectedMessages
        .filter((msg) => !msg.isAI) // Only user messages
        .map((msg) => msg.text)
        .join(" ");
      const formattedMessage = `[!Important] Always Give Response in JSON Format. This is the Customer queris:\n  ${nonAIMessages}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-api-key": lyzrApiKey,
        },
        body: JSON.stringify({
          agent_id:"679b0359fd594d277677a24a",
          user_id:"prajjwal@lyzr.ai",
          session_id:"prajjwal@lyzr.ai",
          message: formattedMessage,  
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }

      const data = await response.json();
      console.log("Response:", data);
      
      const parsedResponse = JSON.parse(data.response);
      console.log("Parsed Response:", parsedResponse);

      setSidebarData(parsedResponse);

      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }finally {
      setLoading(false); // Stop loading after the request is complete
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="bg-[#f7f2fe] h-8  w-full mx-auto">
        <p className="text-sm text-[#292929] font-semibold mt-1.5 text-center mx-auto">Demo App by Lyzr. Need a customized agent?<a target="_blank" href="https://www.lyzr.ai/book-demo/" className="text-purple-500 font-semibold border-2 border-purple-400 cursor-pointer bg-[#ffffff] p-1 px-1.5 rounded-xl hover:text-[#8923e8]  hover:shadow-lg ml-2">Speak to a specialist</a></p>
      </div>

      <div className="bg-white shadow-sm px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Bank Icon" 
            className="h-12 w-auto pr-2 border-r border-r-[#9d9d9d]"
          />
          <div className="items-baseline space-x-1">
            <h1 className="text-l font-bold text-gray-900">
              Teller Assistance
            </h1> 
            <h1 className="text-2xl -mt-2 font-bold text-purple-500">
              Agent
            </h1>
          </div>
        </div>
        
        <div className="relative group">
          <Info className="h-5 w-5 text-gray-500 cursor-help" />
          <div className="absolute z-10 right-0 w-72 px-4 py-3 mt-2 bg-gray-50 border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-sm text-gray-600">
            <p className="font-medium mb-2">How It Works:</p>
            <ul className="space-y-2">
              <li>• Left Panel: Select a conversation from the dropdown. Conversations will load sequentially.</li>
              <li>• Right Panel: As the conversation progresses, relevant search results and document links will appear dynamically.</li>
              <li>• Chat Feature: Disabled in this demo. The agent functions in a read-only mode for now.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

      
      <div className="flex flex-1 overflow-hidden">
      <div className="flex-1 flex flex-col relative bg-white/80 backdrop-blur-sm  border-b border-gray-600 w-max[50%]">
        <div className="flex justify-between items-center p-6  border-b border-gray-100 bf-gray-50">
          <div className="relative inline-block">
            <select
              className="appearance-none bg-white px-4 py-2.5 pr-10 rounded-xl border border-gray-200 
                        text-gray-700 font-medium text-sm hover:border-blue-300 focus:border-blue-400 
                        focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer
                        shadow-sm"
              value={selectedConversation || ""}
              onChange={(e) => {
                const selectedId = e.target.value ? parseInt(e.target.value) : null;
                if (selectedId === null) {
                  setSelectedConversation(null);
                  setMessages([]);
                  setSidebarData([]);
                } else {
                  handleConversationChange(e);
                }
              }}
            >
              <option value="" className="py-2 text-gray-500">
                Select a conversation
              </option>
              {conversationList.map((conversation) => (
                <option 
                  key={conversation.id} 
                  value={conversation.id}
                  className="py-2 text-gray-600"
                >
                  {conversation.heading}
                </option>
              ))}
            </select>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        {selected ? (
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className="animate-fade-in">
                <MessageBubble
                  isAI={message.isAI}
                  message={message.text}
                  timestamp={message.timestamp}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500 text-sm font-semibold bg-gray-50">
            Select a conversation to begin
          </div>
        )}
        {/* {selected && (
          <div className="border-t border-gray-100 bg-white/50 backdrop-blur-sm h-16">
            <div className="mx-auto w-full">
              <ChatInput onSendMessage={handleSendMessage} /> 
            </div>
          </div>
        )} */}
      </div>
      <div className="bg-gray-50 border-l border-gray-200">
        {loading ? (
          <LoadingSidebar/>
        ) : (
          <Sidebar data={sidebarData} />
        )}
      </div>
      
      </div>
    </div>
    
  );
};

export default ChatLayout;
