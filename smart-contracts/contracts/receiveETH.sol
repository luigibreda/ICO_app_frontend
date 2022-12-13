pragma solidity ^0.6.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract WVW is ERC20 {
  string public name = "Watch Videos & Win";
  string public symbol = "WVW";
  uint8 public decimals = 18;
  uint256 public totalSupply = 100000000 * (10 ** uint256(decimals));

  constructor() public {
    // Atribuir o suprimento total ao criador do contrato
    _mint(msg.sender, totalSupply);
  }

  // Permitir a compra do token por 0.002 BNB
  function buy() public payable {
    require(msg.value == 0.002 * 10 ** 18, "O valor deve ser de 0.002 BNB");
    _mint(msg.sender, msg.value);
  }
}
