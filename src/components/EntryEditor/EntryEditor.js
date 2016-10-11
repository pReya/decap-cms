import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Button } from 'react-toolbox/lib/button';
import { ScrollSync, ScrollSyncPane } from '../ScrollSync';
import ControlPane from '../ControlPanel/ControlPane';
import PreviewPane from '../PreviewPane/PreviewPane';
import styles from './EntryEditor.css';

export default function EntryEditor(
  {
    collection,
    entry,
    getMedia,
    onChange,
    onAddMedia,
    onRemoveMedia,
    onPersist,
    onCancelEdit,
  }) {
  return (
    <div className={styles.root}>
      <ScrollSync>
        <div className={styles.container}>
          <ScrollSyncPane>
            <div className={styles.controlPane}>
              <ControlPane
                collection={collection}
                entry={entry}
                getMedia={getMedia}
                onChange={onChange}
                onAddMedia={onAddMedia}
                onRemoveMedia={onRemoveMedia}
              />
            </div>
          </ScrollSyncPane>
          <div className={styles.previewPane}>
            <PreviewPane
              collection={collection}
              entry={entry}
              getMedia={getMedia}
            />
          </div>
        </div>
      </ScrollSync>
      <div className={styles.footer}>
        <Button
          primary
          raised
          onClick={onPersist}
        >
          Save
        </Button>
        {' '}
        <Button onClick={onCancelEdit}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

EntryEditor.propTypes = {
  collection: ImmutablePropTypes.map.isRequired,
  entry: ImmutablePropTypes.map.isRequired,
  getMedia: PropTypes.func.isRequired,
  onAddMedia: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onPersist: PropTypes.func.isRequired,
  onRemoveMedia: PropTypes.func.isRequired,
  onCancelEdit: PropTypes.func.isRequired,
};
