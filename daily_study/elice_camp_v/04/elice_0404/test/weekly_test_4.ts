interface IFile {
  title: string
  runningTime: number    
}

// interface를 확장해주세요.
interface IVideo extends IFile {
  extention: string
}

// Genric 제약조건을 변경해주세요.
class Player<T extends IVideo> {
private file: T;

openFile(file: T): void {
  this.file = file;
}
   
play(): void {
  console.log(this.file);
}
}

// 아래 코드는 수정을 하지 않습니다. 
const player = new Player<IVideo>()
player.openFile({title: '타입스크립트', runningTime: 60, extention: 'MPEG'});
player.play();
