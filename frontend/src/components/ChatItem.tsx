import CodeBlock from './CodeBlock';

const extractCodeFromString = (message: string) => {
  const messageBlocks = message.split('```');
  return messageBlocks;
};

const isCodeBlock = (block: string) => {
  const codeIndicators = /[{};=<>\[\]()]/;
  return codeIndicators.test(block);
};

const ChatItem = ({ message }: { message: string }) => {
  const messageBlocks = extractCodeFromString(message);
  return (
    <>
      {messageBlocks.map((block, index) => {
        return isCodeBlock(block) ? (
          <CodeBlock key={index} text={block} />
        ) : (
          <p key={index}>{block}</p>
        );
      })}
    </>
  );
};
export default ChatItem;
