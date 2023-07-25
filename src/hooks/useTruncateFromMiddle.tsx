interface UseTruncateFromMiddleProps {
  fullStr: string;
  strLen: number;
}

export const useTruncateFromMiddle = ({ fullStr = '', strLen }: UseTruncateFromMiddleProps) => {
  if (fullStr.length <= strLen) return fullStr;
  const middleStr = '...';
  const midLen = middleStr.length;
  const charsToShow = strLen - midLen;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);

  return fullStr.substr(0, frontChars) + middleStr + fullStr.substr(fullStr.length - backChars);
};
