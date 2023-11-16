import { cp, mkdir } from "fs";

// pkg 폴더 생성
mkdir("./pkg", { recursive: true }, (err) => {
  if (err) throw err;

  // dist 폴더를 pkg/dist로 복사
  cp("./dist", "./pkg/dist", { recursive: true }, (err) => {
    if (err) throw err;
  });

  // package.json을 pkg/package.json으로 복사
  cp("./package.json", "./pkg/package.json", (err) => {
    if (err) throw err;
  });

  // README.md를 pkg/README.md로 복사
  cp("./README.md", "./pkg/README.md", (err) => {
    if (err) throw err;
  });
});
