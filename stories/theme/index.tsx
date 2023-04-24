import { useState } from "react";
import { useTheme } from "@emotion/react";

import {
  Scrollable,
  Box,
  Text,
  Disabler,
  Block,
  Icon,
  Loading,
} from "../components/generic";
import { Button } from "../components/input";
import { isMobile } from "../../tools";

const ThemeTest = () => {
  const { change } = useTheme();
  const mobile = isMobile();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Scrollable y>
      <Box gap={18} h={mobile ? "stretch" : "left"} padding="30px 20px">
        <Text type="title" template={1}>
          안녕 Korean.
        </Text>
        <Text>
          <Icon type="hamburger" size={20} />
          이것은 Flexbox 이다.
        </Text>
        <Box d={mobile ? "v" : "h"} gap={20}>
          <Disabler>
            <Button
              stretch={mobile}
              type="filled"
              icon="moon"
              action={() => change("dark")}
            >
              다크 모드
            </Button>
            <Button stretch={mobile} icon="sun" action={() => change("light")}>
              라이트 모드
            </Button>
            <Button
              stretch={mobile}
              icon="reload"
              disabled
              action={() => change("auto")}
            >
              자동 (비활성화)
            </Button>
            <Button
              stretch={mobile}
              icon="reload"
              type="warn"
              action={() => change("auto")}
            >
              자동
            </Button>
          </Disabler>
        </Box>
        <Block>
          {/* eslint-disable-next-line */}
          {/* <Pressable link={<a href="https://guthib.com" />}>
            이 텍스트는 누를 수 있어요.
          </Pressable> */}
          <span>I'm Human.</span>
        </Block>
        <Box>
          {/* <Pressable action={() => setDisable(!disable)}>
            얘네들 비활성화 시켜줘요
          </Pressable>
          <Switch
            action={(value) => setDisable(value)}
            value={disable}
            label="버튼 비활성화"
          /> */}
        </Box>
        <Box d="h" gap={20}>
          <Loading size="small" />
          <Loading size="medium" />
          <Loading size="big" />
        </Box>
        <Box d="h" gap={20} v="center">
          <Button
            icon="link"
            loading={isLoading}
            action={() => setIsLoading(true)}
          >
            불러오기
          </Button>
          <Button
            type="filled"
            icon="reload"
            size="small"
            action={() => setIsLoading(false)}
          >
            초기화
          </Button>
        </Box>
        {/* <Pressable action={() => setIsOpen(!isOpen)}>Sheet 열기</Pressable>
        <Sheet
          open={isOpen}
          device="mobile"
          type="bottom"
          points={(viewportHeight) => [0.4, viewportHeight - 20]}
          onDismiss={() => setIsOpen(false)}
        /> */}
        <Text>{`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.
Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl suscipit adipiscing bibendum est ultricies. Arcu ac tortor dignissim convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur. Est placerat in egestas erat imperdiet. Consequat interdum varius sit amet mattis vulputate enim.
Sit amet nulla facilisi morbi tempus. Nulla facilisi cras fermentum odio eu. Etiam erat velit scelerisque in dictum non consectetur a erat. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ut sem nulla pharetra diam. Fames ac turpis egestas maecenas. Bibendum neque egestas congue quisque egestas diam. Laoreet id donec ultrices tincidunt arcu non sodales neque. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Faucibus interdum posuere lorem ipsum dolor sit.
      `}</Text>
      </Box>
    </Scrollable>
  );
};

export default ThemeTest;
