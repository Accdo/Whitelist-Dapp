// 구조분해할당(destructring assignment)문법을 사용해서,
// hardhat내부에 있는 ethers를 뽑아오고, 뽑아온 ethers를
// 변수 ethers에 할당
const { ethers } = require("hardhat");


// 스마트컨트랙트를 블록체인상에 배포할때 실행될 메인 함수
async function main () { // async-await 자바스크립트 문법(비동기처리)

  // ethers에서 제공해주는 스마트컨트랙트 배포할 때 쓰는 함수인 getContractFactory를 사용해서
  // 스마트컨트랙트를 메모리상에 올림(인스턴스화)
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // 실제 배포하는 함수 실행(deploy). 이때 생성자 함수에 넘겨줄 값도 같이 입력
  const depoloyedWhitelistContract = await whitelistContract.deploy(10);

  // 스컨이 배포될때까지 대기(AWAIT)
  await depoloyedWhitelistContract.deployed();

  // 배포가 완료되면 로그창에 'whitelist contract address: 스컨 주소' 출력
  console.log("whitelist contract address:", depoloyedWhitelistContract.address);

}

main() // 위에서 선언한 Main함수 실행
.then(() => process.exit(0))  // 이 함수가 정상적으로 실행되면 프로세스 종료(정상코드인 0)
.catch((err) => {             // 함수 실행중에 에러가 나면 
  console.error(err);         // 콘솔창에 에러 출력
  process.exit(1);            // 그리고 프로세스 종료(비정상을 나타내는 코드인 1)
})