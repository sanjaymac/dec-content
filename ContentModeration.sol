
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContentModeration {
    struct ModerationRecord {
        uint256 id;
        address reporter;
        string contentHash;
        bool isFlagged;
        bool isApproved;
    }

    uint256 public recordCount = 0;
    mapping(uint256 => ModerationRecord) public moderationRecords;

    event RecordCreated(uint256 id, address reporter, string contentHash);
    event RecordModerated(uint256 id, bool isFlagged, bool isApproved);

    function createRecord(string memory _contentHash) public {
        recordCount++;
        moderationRecords[recordCount] = ModerationRecord(recordCount, msg.sender, _contentHash, false, false);
        emit RecordCreated(recordCount, msg.sender, _contentHash);
    }

    function moderateRecord(uint256 _id, bool _isFlagged, bool _isApproved) public {
        ModerationRecord storage record = moderationRecords[_id];
        record.isFlagged = _isFlagged;
        record.isApproved = _isApproved;
        emit RecordModerated(_id, _isFlagged, _isApproved);
    }
}
