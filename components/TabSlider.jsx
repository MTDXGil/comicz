"use client";
import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { motion } from "framer-motion";
import ComicItem from "./ComicItem";

export default function TabSlider({
  recentUpdateComic,
  newComic,
  completeComic,
  comingSoonComic,
}) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>
            Mới Cập Nhật
            {tabIndex === 0 ? (
              <motion.div
                layoutId="tab-indicator"
                className="tab-indicator"
              ></motion.div>
            ) : undefined}
          </Tab>

          <Tab>
            Mới Ra Mắt
            {tabIndex === 1 ? (
              <motion.div
                layoutId="tab-indicator"
                className="tab-indicator"
              ></motion.div>
            ) : undefined}
          </Tab>
          <Tab>
            Hoàn Thành
            {tabIndex === 2 ? (
              <motion.div
                layoutId="tab-indicator"
                className="tab-indicator"
              ></motion.div>
            ) : undefined}
          </Tab>
          <Tab>
            Sắp Ra Mắt
            {tabIndex === 3 ? (
              <motion.div
                layoutId="tab-indicator"
                className="tab-indicator"
              ></motion.div>
            ) : undefined}
          </Tab>
        </TabList>

        <TabPanel>
          <ul className="comic-list">
            {recentUpdateComic.items.slice(0, 16).map((comic) => (
              <ComicItem key={comic._id} comic={comic} />
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="comic-list">
            {newComic.items.slice(0, 16).map((comic) => (
              <ComicItem key={comic._id} comic={comic} />
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="comic-list">
            {completeComic.items.slice(0, 16).map((comic) => (
              <ComicItem key={comic._id} comic={comic} />
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="comic-list">
            {comingSoonComic.items.slice(0, 16).map((comic) => (
              <ComicItem key={comic._id} comic={comic} />
            ))}
          </ul>
        </TabPanel>
      </Tabs>
    </div>
  );
}
