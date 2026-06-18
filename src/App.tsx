import ReferralBadge from './components/ReferralBadge/ReferralBadge';

const App = () => {
  return (
      <div className="flex flex-col gap-2">
          <ReferralBadge variant="default" referralCode="john123" style={{width:"220px"}}/>
          <ReferralBadge variant="active" referralCode="jane456" className='w-70'/>
          <ReferralBadge variant="reward" label="500 coins earned!" />
          <ReferralBadge variant="expired" />
          <ReferralBadge variant="default" referralCode="aditya" size="sm" />
          <ReferralBadge variant="active" referralCode="aditya" size="lg" />
      </div>
  );
}

export default App
